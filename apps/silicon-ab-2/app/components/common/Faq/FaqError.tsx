import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FaqError() {
	return (
		<div className="faq__faq-accordion">
			<div
				className="faq__faq-accordion__container
            faq__faq-accordion__container--border-radius
            faq__faq-accordion__container--active"
			>
				<div className="faq__faq-accordion__container__content">
					<h4 className="text-center text-theme-light-display-headings dark:text-theme-dark-display-headings">
						<FontAwesomeIcon
							icon={faCircleExclamation}
							size="3x"
							className="py-20 w-full"
						/>
						Failed to Load Testimonial Data!
					</h4>
				</div>
			</div>
		</div>
	);
}

export default FaqError;
