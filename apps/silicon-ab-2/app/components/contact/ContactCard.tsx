import ButtonForm from "@/app/components/forms/ButtonForm";

import {
	faArrowRight,
	faUserPlus,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactCard() {
	return (
		<>
			<div className="contact-card">
				<h2>Contact Us</h2>
			</div>

			<div className="contact-card">
				<div className="contact-card__icon">
					<FontAwesomeIcon
						icon={faEnvelope}
						size="2xl"
						height={28}
						width={28}
					/>
				</div>
				<div className="contact-card__text">
					<h4>Email us</h4>
					<p>
						Please feel free to drop us a line. We will respond as soon as
						possible.
					</p>
					<ButtonForm
						variant="link-icon"
						icon={faArrowRight}
						iconClassName="faq__faq-contact__contact-card--color-primary"
						className="faq__faq-contact__contact-card--color-primary"
						iconPosition="right"
					>
						Leave a message
					</ButtonForm>
				</div>
			</div>
			<div className="contact-card">
				<div className="contact-card__icon">
					<FontAwesomeIcon
						icon={faUserPlus}
						size="2xl"
						height={28}
						width={28}
					/>
				</div>
				<div className="contact-card__text">
					<h4>Careers</h4>
					<p>
						Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
					</p>
					<ButtonForm
						variant="link-icon"
						icon={faArrowRight}
						iconClassName="faq__faq-contact__contact-card--color-primary"
						className="faq__faq-contact__contact-card--color-primary"
						iconPosition="right"
					>
						Send an application
					</ButtonForm>
				</div>
			</div>
		</>
	);
}

export default ContactCard;
