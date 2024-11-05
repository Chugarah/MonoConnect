import { createFileRoute, Link } from "@tanstack/react-router";
import ContactList from "../components/ContactList";

export const Route = createFileRoute("/eduProps")({
	component: eduProps,
});

function eduProps() {
	return (
		<>
			<h3> Props </h3>
			<p>
				<Link to="..">Back to Education</Link>
			</p>
			<div className="edu-props-container">
				<ContactList />
			</div>
		</>
	);
}
