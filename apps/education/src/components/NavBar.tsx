import SearchForm from "./SearchForm";

function ComponentsApp() {
	return (
		<>
			<nav className="navbar bg-dark navbar-dark navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" title="Navbar" href="./">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Link
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="/"
									// biome-ignore lint/a11y/useSemanticElements: <explanation>
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="/">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="/">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a className="nav-link disabled" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
						<SearchForm />
					</div>
				</div>
			</nav>
		</>
	);
}
// Export the component for use in other files
export default ComponentsApp;