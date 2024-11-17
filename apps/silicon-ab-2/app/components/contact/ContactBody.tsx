import AdressCard from "@/app/components/contact/AdressCard";

function ContactBody() {
	return (
		<div className="py-[10em] piff-puff">
			<div className="contact-page-wrapper--white ">
				<div className="contact-page-wrapper__container">
					{/* Header Contact Area */}
					<div className="contact-page-wrapper__container__contact-header">
						<div className="contact-page-wrapper__container__contact-header__contact-info--body">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7270791764607!2d-122.42375678441455!3d37.77559797975886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2s!4v1523304626667"
								width="100%"
								height="540"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Google Maps"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div className="contact-page-wrapper__container__contact-header__contact-form--body">
							<AdressCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactBody;
