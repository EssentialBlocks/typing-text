/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/**
 * Contains a render error so it cannot destroy the block preview.
 *
 * The inspector sidebar and the generated <style> element both render inside the
 * block's own React subtree, so a throw in either one is caught by Gutenberg's
 * block boundary and replaced with "This block has encountered an error and
 * cannot be previewed" — the whole block disappears because a sidebar control
 * failed. The controls come from the shared `controls` submodule, so a single
 * unguarded lookup in any of them takes this block down with it.
 *
 * Wrapping those two subtrees keeps the failure local: the block itself keeps
 * rendering, and the real error is logged with a searchable prefix instead of
 * being swallowed by the generic boundary message.
 */
class BlockErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Surfaced deliberately: this is the only place the underlying error is
		// visible once the boundary stops it from reaching Gutenberg.
		// eslint-disable-next-line no-console
		console.error(
			`[typing-text] ${this.props.label || "block"} render failed:`,
			error,
			errorInfo && errorInfo.componentStack
		);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback !== undefined ? this.props.fallback : null;
		}
		return this.props.children;
	}
}

export default BlockErrorBoundary;
