import { Link, createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";

export const Route = createFileRoute("/eduComponents")({
	component: EduComponents,
});

function EduComponents() {
	return (
		<>
			<NavBar />
			<div className="p-2">
				<p>
					<Link to="..">Back to Education</Link>
				</p>
				<h3>Components</h3>

				<main>
					<Hero />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
