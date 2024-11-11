import Image from "next/image";
function HowDoesItWorks() {
	return (
		<>
			<section aria-label="How Does it Work?" className="app-how-diw-wrapper">
				<div className="app-how-diw">
					<h1>How Does It Work?</h1>
					<div className="app-how-diw__image-items">
						<Image
							src="/images/how-does-it-works/how-phone-2.svg"
							alt="How does it work Phone 2"
							width={0}
							height={0}
							id="how-phone-2"
							className="app-how-diw__image-items__image"
						/>
						<Image
							src="/images/how-does-it-works/how-phone-1.svg"
							alt="How does it work Phone 1"
							width={0}
							height={0}
							id="how-phone-1"
							className="app-how-diw__image-items__image"
						/>
						<Image
							src="/images/how-does-it-works/how-phone-3.svg"
							alt="How does it work Phone 1"
							width={0}
							height={0}
							id="how-phone-3"
							className="app-how-diw__image-items__image"
						/>
					</div>
					<h4>Transfers to people from your contact list</h4>
					<p>
						Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
						Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
					</p>
				</div>
			</section>
		</>
	);
}

export default HowDoesItWorks;
