import ButtonForm from "@/app/components/forms/ButtonForm";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function FaqSocials() {
	return (
		<div className="faq__faq-contact">
			<ButtonForm
				title="Contact us now"
				className="faq__faq-contact__contact-us-now-btn"
				iconPosition="hidden"
				size="xl"
				variant="button-primary"
			>
				Contact us now
			</ButtonForm>
			<div className="faq__faq-contact__contact-card">
				<Image
					src="/images/socials/contact-phone-icon.svg"
					alt="Phone Image"
					width={0}
					height={0}
				/>
				<p>Still have questions?</p>
				<ButtonForm
					variant="link-icon"
					icon={faArrowRight}
					iconClassName="faq__faq-contact__contact-card--color-primary"
					className="faq__faq-contact__contact-card--color-primary"
					iconPosition="right"
				>
					Contact us
				</ButtonForm>
			</div>
			<div className="faq__faq-contact__contact-card">
				<Image
					className="faq__faq-contact__contact-card--color-green"
					src="/images/socials/contact-chat.svg"
					alt="Phone Chat"
					width={0}
					height={0}
				/>
				<p>Still have questions?</p>
				<ButtonForm
					variant="link-icon"
					icon={faArrowRight}
					className="faq__faq-contact__contact-card--color-green"
					iconPosition="right"
				>
					Contact us
				</ButtonForm>
			</div>
		</div>
	);
}

export default FaqSocials;
