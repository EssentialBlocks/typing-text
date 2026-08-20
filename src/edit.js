/**
 * WordPress dependencies
 */
import { useEffect, useRef } from "@wordpress/element";
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

    // Rebuild the Typed instance whenever an option changes.
    useEffect(() => {
        if (!typedRef.current || !block.current) return;
        typedRef.current.destroy();
        typedRef.current = new Typed(block.current, generateOptions());
    }, [
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
    ]);

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


    // this useEffect is for creating an unique id for each block's unique className by a random unique number
    useEffect(() => {
        //Set Default "typedText"
        if (typedText.length === 0) {
            // One setAttributes call, not three — three separate calls each
            // pushed their own entry onto the editor's undo stack.
            setAttributes({
                typedText: [{ text: "first string" }, { text: "second string" }],
                prefix: "This is the ",
                suffix: "of the sentence.",
            });
        }

        //Init Typed class execute
        if (block.current) {
            typedRef.current = new Typed(block.current, generateOptions());
        }
        return () => {
            // Destroy Typed instance
            if (typedRef.current) {
                typedRef.current.destroy();
                typedRef.current = null;
            }
        };
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
