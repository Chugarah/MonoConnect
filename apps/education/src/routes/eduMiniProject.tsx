import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/eduMiniProject")({
	component: eduMiniProject,
});

function eduMiniProject() {
	return (
		<>
			<p>
				<Link to="..">Back to Education</Link>
			</p>
			<h3>Mini Project</h3>
			<div className="mx-auto p-2">The Project eixst</div>
		</>
	);
}
