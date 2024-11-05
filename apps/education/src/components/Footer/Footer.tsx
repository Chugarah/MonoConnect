import { Link } from "@tanstack/react-router";
import SearchForm from "../SearchForm";

export default function Footer() {
	return (
		<>
			<div>
				<ul>
					<li>
						<Link to="/">Home </Link>
					</li>
					<li>
						<Link to="/eduComponents">Components</Link>
					</li>
					<li>
						<Link to="/intoToReact">Intro To React </Link>
					</li>
				</ul>
				<SearchForm />
			</div>
		</>
	);
}
