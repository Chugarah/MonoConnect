import { createFileRoute, Link } from "@tanstack/react-router";
import Posts from "@components/loopar/Posts";

export const Route = createFileRoute("/eduLoops")({
	component: eduProps,
});

function eduProps() {
	return (
		<>
			<p>
				<Link to="..">Back to Education</Link>
			</p>
			<div className="container">
				<Posts />
			</div>
		</>
	);
}
