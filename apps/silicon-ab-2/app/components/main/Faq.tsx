import FaqAccordion from "@/app/components/common/Faq/FaqAccordion";

/**
 * FAQ Component
 *
 * @component
 * @description Renders the FAQ section of the application, including a header with title and subtitle,
 * followed by an accordion component containing the FAQ items.
 *
 * The component uses semantic HTML with proper ARIA labels for accessibility.
 *
 * @example
 * ```jsx
 * <Faq />
 * ```
 *
 * @returns {JSX.Element} A section containing the FAQ header and accordion
 */
function Faq() {
	return (
		<>
			<section
				aria-label="Any questions? Check out the FAQs"
				className="faq-wrapper"
			>
				<div className="faq">
					<div className="faq__faq-header">
						<h2>Any questions? Check out the FAQs</h2>
						<p>Still have unanswered questions and need to get in touch?</p>
					</div>
				</div>

				<FaqAccordion />
			</section>
		</>
	);
}

export default Faq;
