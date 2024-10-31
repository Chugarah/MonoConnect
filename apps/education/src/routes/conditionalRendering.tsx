import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/conditionalRendering")({
	component: conditionalRendering,
});

/**
 * A component that demonstrates different methods of conditional rendering in React
 * including ternary operators, logical AND operators, and dynamic class names.
 *
 * @returns {JSX.Element} The rendered component
 */
function conditionalRendering() {
	/** The user's name that will be conditionally displayed */
	const [name] = useState("Joakim");
	/** Controls the visibility of name-related elements */
	const [showName, setShowName] = useState(false);
	/** Controls the active state of the square elements */
	const [isActive, setIsActive] = useState(true);
	/** Indicates whether the component has finished loading */
	const [isLoaded] = useState(true);

	/**
	 * Toggles the visibility of name-related elements
	 */
	const toggleName = () => {
		setShowName((value) => !value);
	};

	// Loading state check
	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<div className="p-2">
			<p>
				<Link to="..">Back to Education</Link>
			</p>

			<h3>Conditional Rendering</h3>

			{/* Demonstrates ternary operator conditional rendering */}
			<div>{showName ? <p>{name}</p> : <p>inget namn</p>}</div>

			{/* Demonstrates logical AND operator for conditional rendering */}
			<div>{showName && <p>{name}</p>}</div>

			{/* Demonstrates truthy value conditional rendering */}
			{name && <p>{name}</p>}

			<button onClick={toggleName} type="button">
				{showName ? "Hide Name" : "Show Name"}
			</button>
			{showName && <p>Name: {name}</p>}

			<button
				onClick={() => {
					setIsActive((prev) => !prev);
				}}
				type="button"
			>
				Click Me x2
			</button>

			{/* Demonstrates conditional class assignment using logical AND */}
			<div className={`edu-square ${isActive && "edu-active"}`} />

			{/* Demonstrates conditional class assignment using ternary operator */}
			<div className={`edu-square ${isActive ? "edu-active" : ""}`} />
		</div>
	);
}
