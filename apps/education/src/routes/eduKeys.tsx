import ToggleButton from "@components/Buttons/ToggleButton";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/eduKeys")({
	component: eduKeys,
});

function eduKeys() {
	const [numbers, setNumbers] = useState([0]);

	const add = () => {
		const nextNumber = numbers.length;
		setNumbers((prevNumbers) => [nextNumber, ...prevNumbers]);
	};

	return (
		<>
			<p>
				<Link to="..">Back to Education</Link>
			</p>
			<h3>Edu Keys</h3>

			<div className="container">
				<button type="button" className="btn btn-add btn-primary" onClick={add}>
					Lägg till
				</button>

				{numbers.map((number) => (
					<ToggleButton number={number} key={number} />
				))}
			</div>
		</>
	);
}
