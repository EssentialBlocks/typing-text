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

    // typed.js has no API for changing options in place, so every option change
    // has to rebuild the instance — and a rebuild blanks the element and retypes
    // from the first character. Dragging the Type Speed slider emits one
    // setAttributes per step, which previously meant one visible restart per
    // step. Deferring the *rebuild* keeps that to a single restart once the
    // slider settles. The attributes themselves are never deferred: typeSpeed is
    // stored the moment it changes, so the control, its displayed value and the
    // saved post content all behave exactly as before.
    const REBUILD_DEBOUNCE_MS = 300;

    const currentOptions = generateOptions();
    const currentOptionsKey = JSON.stringify(currentOptions);
    // The options the live Typed instance was actually built from. Comparing by
    // value rather than by reference also stops the rebuild from firing on a
    // `typedText` array that was re-created without its contents changing.
    const [appliedOptions, setAppliedOptions] = useState(currentOptions);
    const appliedOptionsKey = JSON.stringify(appliedOptions);

    useEffect(() => {
        if (currentOptionsKey === appliedOptionsKey) return;

        // Nothing is animating yet, so there is no restart to hide — apply at
        // once. This is the freshly-inserted-block path, where waiting would
        // only delay the first render of the typing preview.
        if (!typedRef.current) {
            setAppliedOptions(currentOptions);
            return;
        }

        const timer = setTimeout(
            () => setAppliedOptions(currentOptions),
            REBUILD_DEBOUNCE_MS
        );
        // Each new option value cancels the previous pending rebuild, so a drag
        // applies once, with the last value the user chose, and leaves no timer
        // behind.
        return () => clearTimeout(timer);
    }, [currentOptionsKey, appliedOptionsKey]);

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

        const instance = new Typed(block.current, appliedOptions);
        typedRef.current = instance;

        return () => {
            instance.destroy();
            typedRef.current = null;
        };
    }, [appliedOptions, hasStrings]);

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
