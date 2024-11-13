import { Button } from "@/components/ui/button";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
					<div className="faq__faq-accordion">
						<div
							className="faq__faq-accordion__container
            faq__faq-accordion__container--border-radius
            faq__faq-accordion__container--active"
						>
							<div className="faq__faq-accordion__container__title">
								<p>Is any of my personal information stored in the App?</p>
								<p>
									<Button
										variant="outline"
										size="icon"
										className="
                    faq__faq-accordion__container__title__button"
									>
										<FontAwesomeIcon
											icon={faChevronUp}
											className="faq__faq-accordion__container__title__icon"
											size="sm"
										/>
									</Button>
								</p>
							</div>
							<div className="faq__faq-accordion__container__content">
								<p>
									Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
									Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
									cursus adipiscing gravida et consequat lobortis arcu velit.
									Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
									molestie lorem scelerisque pellentesque. Nisi, enim, arcu
									purus gravida adipiscing euismod montes, duis egestas.
									Vehicula eu etiam quam tristique tincidunt suspendisse ut
									consequat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Faq;
