import Image from "next/image";

/**
 * HowDoesItWorks Component
 *
 * @component
 * @description Renders a section explaining how the application works through visual and textual content.
 * The component displays three phone images in a specific layout along with descriptive text.
 * It follows BEM naming conventions for CSS classes and includes proper ARIA labels for accessibility.
 *
 * The component uses Next.js Image component for optimized image loading, with three phone images
 * arranged to demonstrate the app's functionality. Each image is given a unique ID and consistent
 * styling through BEM classes.
 *
 * @example
 * ```jsx
 * <HowDoesItWorks />
 * ```
 *
 * @returns {JSX.Element} A section containing images and text explaining the app's functionality
 */
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
