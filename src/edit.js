/**
 * WordPress dependencies
 */
import { useEffect, useRef, useState } from "@wordpress/element";
import {
    BlockControls,
    AlignmentToolbar,
} from "@wordpress/block-editor";

const {
    BlockProps
} = window.EBTypingTextControls;

/**
 * External dependencies
 */
import Typed from "typed.js";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import Style from "./style";
import BlockErrorBoundary from "./error-boundary";
import { escapeHTML } from "@wordpress/escape-html";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        prefix,
        typedText,
        typeSpeed,
        startDelay,
        smartBackspace,
        backSpeed,
        backDelay,
        fadeOut,
        fadeOutDelay,
        loop,
        showCursor,
        suffix,
        textAlign,
        classHook,
    } = attributes;
    const block = useRef(null);
    // Held in a ref, not state. The previous `useState` version was captured by
    // the mount effect's cleanup closure while still null, so the Typed instance
    // was never destroyed on unmount and its timers kept running.
    const typedRef = useRef(null);
    // True only when this block mounted with no strings yet — a freshly
    // inserted block, whose defaults are seeded by the mount effect below.
    // While it is set, Typed construction waits for those defaults to land, so
    // the block builds one instance instead of building one from the fallback
    // strings and immediately tearing it down when the real ones arrive.
    const pendingDefaultsRef = useRef((typedText || []).length === 0);

    const generateOptions = () => {
        // Generate options for Typed instance
        const {
            typedText,
            typeSpeed,
            startDelay,
            smartBackspace,
            backSpeed,
            backDelay,
            fadeOut,
            fadeOutDelay,
            loop,
            showCursor,
        } = attributes;
        let strings = getStrings(typedText);

        return {
            strings,
            typeSpeed,
            startDelay,
            smartBackspace,
            backSpeed,
            backDelay,
            fadeOut,
            fadeOutDelay,
            loop,
            showCursor,
        };
    };

    const getStrings = (typedText) => {
        let strings = [];
        if (typeof typedText === "object" && typedText.length > 0) {
            typedText.map((item) => strings.push(escapeHTML(item.text)));
        } else {
            strings = ["first string", "second string"];
        }

        return strings;
    };

    // typed.js has no API for replacing an option set wholesale, and rebuilding
    // the instance blanks the element and retypes from the first character. But
    // it does re-read most of the timing options off the instance every time it
    // schedules the next tick, so those can be written to the running instance
    // instead of forcing a rebuild:
    //
    //   typeSpeed     humanizer(this.typeSpeed)   -- typewrite()
    //   backSpeed     humanizer(this.backSpeed)   -- backspace()
    //   backDelay     this.backDelay              -- doneTyping()
    //   startDelay    this.startDelay             -- begin()
    //   fadeOutDelay  this.fadeOutDelay           -- initFadeOut()
    //
    // Everything else is baked in at construction: `strings` is expanded into
    // `sequence`/`strPos`, `showCursor` decides whether a cursor node is ever
    // created, `fadeOut` decides whether the fade-out stylesheet is injected and
    // `smartBackspace` seeds `stopNum`. Those still rebuild.
    const LIVE_OPTIONS = [
        "typeSpeed",
        "backSpeed",
        "backDelay",
        "startDelay",
        "fadeOutDelay",
    ];

    // Dragging a slider emits one setAttributes per step. Live options no longer
    // reach the rebuild at all, so this now only coalesces genuine rebuilds —
    // typing into the strings input, which fires per keystroke.
    const REBUILD_DEBOUNCE_MS = 300;

    const currentOptions = generateOptions();

    const pickLive = (options) =>
        LIVE_OPTIONS.reduce((live, key) => {
            live[key] = options[key];
            return live;
        }, {});

    // Only the options that cannot be applied in place may trigger a rebuild.
    const structuralOptions = Object.keys(currentOptions).reduce((rest, key) => {
        if (!LIVE_OPTIONS.includes(key)) rest[key] = currentOptions[key];
        return rest;
    }, {});
    const structuralKey = JSON.stringify(structuralOptions);
    const liveKey = JSON.stringify(pickLive(currentOptions));

    // The structural options the live Typed instance was actually built from.
    // Comparing by value rather than by reference also stops the rebuild from
    // firing on a `typedText` array that was re-created without its contents
    // changing.
    const [appliedStructural, setAppliedStructural] = useState(structuralOptions);
    const appliedStructuralKey = JSON.stringify(appliedStructural);

    useEffect(() => {
        if (structuralKey === appliedStructuralKey) return;

        // Nothing is animating yet, so there is no restart to hide — apply at
        // once. This is the freshly-inserted-block path, where waiting would
        // only delay the first render of the typing preview.
        if (!typedRef.current) {
            setAppliedStructural(structuralOptions);
            return;
        }

        const timer = setTimeout(
            () => setAppliedStructural(structuralOptions),
            REBUILD_DEBOUNCE_MS
        );
        // Each new option value cancels the previous pending rebuild, so a burst
        // of edits applies once, with the last value the user chose, and leaves
        // no timer behind.
        return () => clearTimeout(timer);
    }, [structuralKey, appliedStructuralKey]);

    // Type Speed, Start Delay, Back Speed, Back Delay and Fade Delay land here
    // rather than in the rebuild above: nothing is destroyed, so
    // `.eb-typed-view` is never blanked and the text is never retyped from the
    // first character. `startDelay` is the one value typed.js reads only in
    // begin(), so a new delay applies from the next loop instead of instantly —
    // applying it instantly is exactly what used to blank the element.
    useEffect(() => {
        const instance = typedRef.current;
        if (!instance) return;

        const live = pickLive(currentOptions);
        Object.keys(live).forEach((key) => {
            instance[key] = live[key];
            // Keep the option snapshot typed.js stores at construction in step
            // with the instance fields, so a later reset() cannot resurrect a
            // stale value.
            if (instance.options) {
                instance.options[key] = live[key];
            }
        });
    }, [liveKey]);

    // `generateOptions()` falls back to the same two placeholder strings the
    // defaults are seeded with, so the options snapshot is byte-identical before
    // and after seeding. Readiness therefore has to be its own dependency —
    // keyed off the options alone, the effect would never re-run and a freshly
    // inserted block would never start typing at all.
    const hasStrings = (typedText || []).length > 0;

    // Single owner of the Typed instance: it is built here and destroyed by this
    // effect's own cleanup, so React's lifecycle guarantees at most one instance
    // is attached to `.eb-typed-view` at any time.
    useEffect(() => {
        if (!block.current) return;

        // Wait for the mount-time defaults instead of building an instance from
        // the placeholder strings and discarding it a tick later.
        if (pendingDefaultsRef.current) {
            if (!hasStrings) return;
            pendingDefaultsRef.current = false;
        }

        // Built from the full current options, not just the structural ones, so
        // a rebuild triggered by a string change still picks up the latest Type
        // Speed rather than the value the previous build used.
        const instance = new Typed(block.current, currentOptions);
        typedRef.current = instance;

        return () => {
            instance.destroy();
            typedRef.current = null;
        };
    }, [appliedStructuralKey, hasStrings]);

    // you must declare this variable
    const enhancedProps = {
        ...props,
        blockPrefix: 'eb-typing-text',
        // Contained separately from the inspector: if style generation throws,
        // the block should render unstyled rather than vanish entirely.
        style: (
            <BlockErrorBoundary label="style">
                <Style {...props} />
            </BlockErrorBoundary>
        )
    };


    // Seed the defaults for a freshly inserted block. Kept apart from Typed
    // construction on purpose: doing both in one effect meant this
    // setAttributes re-rendered the block and destroyed the instance the very
    // same effect had just created. The values written here are unchanged.
    useEffect(() => {
        //Set Default "typedText"
        if ((typedText || []).length === 0) {
            // One setAttributes call, not three — three separate calls each
            // pushed their own entry onto the editor's undo stack.
            setAttributes({
                typedText: [{ text: "first string" }, { text: "second string" }],
                prefix: "This is the ",
                suffix: "of the sentence.",
            });
        }
    }, []);

    // Return if there is no typed text
    if (!typedText) return <div />;

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={textAlign}
                    onChange={(textAlign) => setAttributes({ textAlign })}
                />
            </BlockControls>
            {isSelected && (
                <BlockErrorBoundary label="inspector">
                    <Inspector
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />
                </BlockErrorBoundary>
            )}
            <BlockProps.Edit {...enhancedProps}>
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-typed-wrapper ${blockId}`}
                        data-id={blockId}
                    >
                        {/* The .eb-typed-content wrapper mirrors save.js so the
                            editor and the front end share the same DOM shape. */}
                        <div className="eb-typed-content">
                            <span className="eb-typed-prefix">{prefix}</span>
                            <span className="eb-typed-view" ref={block} />
                            <span className="eb-typed-suffix">{suffix}</span>
                        </div>
                    </div>
                </div>
            </BlockProps.Edit>
        </>
    );
}
