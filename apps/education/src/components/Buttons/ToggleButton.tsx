import { useState } from "react";
import "@scss/components/buttons/toggle-button.scss";

interface ToggleButtonProp {
	number: number;
}

function ToggleButton(number: ToggleButtonProp) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((state) => !state);
	};

	return (
		<div>
			<button
				type="button"
				className={`btn btn-info ${isOpen && "btn-outline"}`}
				onClick={toggleOpen}
			>
				Button {`nr ${number.number}`}
			</button>

			{isOpen && (
				<div className="expandable">
					<p>Hello</p>
				</div>
			)}
		</div>
	);
}

export default ToggleButton;
