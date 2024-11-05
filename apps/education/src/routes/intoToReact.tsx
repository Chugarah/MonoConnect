import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intoToReact")({
	component: intoToReact,
});

function intoToReact() {
	return (
		<div className="p-2">
			<p>
				<Link to="..">Back to Education</Link>
			</p>

			<h3>Intro To React</h3>
		</div>
	);
}
