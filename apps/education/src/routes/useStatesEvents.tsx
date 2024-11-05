import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/useStatesEvents")({
	component: useStatesEvents,
});

function useStatesEvents() {
	/**
	 * useState Hook Example 1: Counter
	 * @type {[number, function]} counter - Current count value
	 * @type {[function]} setCounter - Function to update counter
	 */
	const [counter, setCounter] = useState(0);

	/**
	 * Event handler for incrementing counter
	 * Uses functional update pattern to safely update based on previous value
	 * @param {number} amount - The amount to increment by
	 */
	function handleClick(amount: number) {
		setCounter((prev) => prev + amount);
	}

	/**
	 * useState Hook Example 2: Name Management
	 * Demonstrating multiple state variables and derived state
	 */
	const [firstName] = useState("Joakim");
	const [lastName, setLastName] = useState("Domain");

	/**
	 * Derived State Example:
	 * Instead of storing fullName as state, we compute it from firstName and lastName
	 * This prevents state synchronization issues and follows React best practices
	 */
	// Anti-pattern: Don't do this
	// const [fullName, setFullName] = useState(`${firstName} ${lastName}`);

	// Good practice: Derive the value instead
	const fullName = `${firstName} ${lastName}`;

	return (
		<>
			<h3> useState & Events </h3>
			<p>
				<Link to="..">Back to Education</Link>
			</p>

			{/* Counter Example Section */}
			<div className="edu-props-container">
				<h3 aria-label="heading for counter">{counter}</h3>

				<button
					onClick={() => handleClick(5)}
					className="btn btn-primary btn"
					type="button"
				>
					Increment 5
				</button>
				<button
					onClick={() => handleClick(25)}
					className="btn btn-primary btn"
					type="button"
				>
					Increment 25
				</button>
			</div>

			{/* Name Management Section */}
			<div>
				<p>
					{firstName} {lastName}
				</p>
				<p>{fullName}</p>
				<button
					onClick={() => {
						setLastName("StrongBox");
					}}
					className="btn btn-primary btn"
					type="button"
				>
					Change Name
				</button>
			</div>
		</>
	);
}
