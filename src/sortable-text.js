/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";

/**
 * External dependencies
 */
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
	arrayMove,
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
	<span className="fa fa-ellipsis-v drag-handle" />
));

const TrashIcon = ({ onDeleteItem, text }) => (
	<span
		className="fa fa-trash eb-typed-sortable-trash"
		onClick={() => onDeleteItem(text)}
	/>
);

const SortableItem = SortableElement(
	({
		text,
		position,
		onTitleClick,
		onTextChange,
		clickedIndex,
		onDeleteItem,
	}) => {
		return (
			<li className="drag-helper">
				<span className="eb-typed-sortable-item">
					<DragHandle />
					<span
						className="eb-typed-sortable-title"
						onClick={() => onTitleClick(position)}
					>
						{text}
					</span>
					<TrashIcon text={text} onDeleteItem={onDeleteItem} />
				</span>
				{clickedIndex === position && (
					<div className="eb-typed-input-wrapper">
						<input
							type="text"
							value={text}
							onChange={() => onTextChange(event, position)}
							placeholder="Add text"
						/>
					</div>
				)}
			</li>
		);
	}
);

const SortableList = SortableContainer(
	({ typedText, onTitleClick, onTextChange, clickedIndex, onDeleteItem }) => {
		return (
			<ul>
				{typedText.map((item, index) => (
					<SortableItem
						key={`item-${index}`}
						index={index}
						position={index}
						text={item.text}
						onTitleClick={onTitleClick}
						onTextChange={onTextChange}
						clickedIndex={clickedIndex}
						onDeleteItem={onDeleteItem}
					/>
				))}
			</ul>
		);
	}
);

class SortableText extends Component {
	state = {
		clickedIndex: null, // Tracks index of clicked text
	};

	// Rearrange typed text array
	onSortEnd = ({ oldIndex, newIndex }) => {
		let typedText = arrayMove(this.props.typedText, oldIndex, newIndex);
		this.props.setAttributes({ typedText });
	};

	// Expand title when clicked
	onTitleClick = (position) => {
		let clickedIndex = this.state.clickedIndex === position ? null : position;
		this.setState({ clickedIndex });
	};

	// Typed text change callback
	onTextChange = (event, position) => {
		let typedText = [...this.props.typedText];
		typedText[position].text = event.target.value;
		this.props.setAttributes({ typedText });
	};

	// Typed text delete callback
	onDeleteItem = (text) => {
		let typedText = [...this.props.typedText].filter(
			(item) => item.text !== text
		);
		this.props.setAttributes({ typedText });
	};

	render() {
		return (
			<SortableList
				typedText={this.props.typedText}
				clickedIndex={this.state.clickedIndex}
				onTitleClick={this.onTitleClick}
				onTextChange={this.onTextChange}
				onDeleteItem={this.onDeleteItem}
				onSortEnd={this.onSortEnd}
				useDragHandle={true}
			/>
		);
	}
}

export default SortableText;
