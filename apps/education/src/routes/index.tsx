import { Link, createFileRoute } from "@tanstack/react-router";

/**
 * Route configuration for the education section's index page
 * Using TanStack Router's file-based routing
 */
export const Route = createFileRoute("/")({
	component: index,
});

/**
 * Main index component for the Education section
 * Serves as a navigation hub to different educational topics
 */
function index() {
	return (
		<>
			{/* Header Section */}
			<div className="p-2">
				<h1>Welcome to Education Section </h1>
			</div>

			{/* Navigation Menu */}
			<div className="p-2 ">
				<h3>Education Home</h3>
				{/*
					Educational Topics List
					Each link corresponds to a different learning module
					organized in a sequential order
				*/}
				<ol>
					<li>
						<Link to="/intoToReact">IntroductionToReact</Link>
					</li>
					<li>
						<Link to="/eduComponents">EduComponents</Link>
					</li>
					<li>
						<Link to="/eduProps">EduComponents</Link>
					</li>
					<li>
						<Link to="/useStatesEvents">useState & Events</Link>
					</li>
					<li>
						<Link to="/conditionalRendering">Conditional Rendering</Link>
					</li>
					<li>
						<Link to="/eduLoops">Loopar</Link>
					</li>
					<li>
						<Link to="/eduKeys">Keys</Link>
					</li>
					<li>
						<Link to="/eduMiniProject">Mini Project</Link>
					</li>
				</ol>
			</div>
		</>
	);
}
