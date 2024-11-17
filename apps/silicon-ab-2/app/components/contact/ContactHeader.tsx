import ContactCard from "@/app/components/contact/ContactCard";
import ContactForm from "@/app/components/contact/ContactForm";
import { faAnglesRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ContactHeader() {
	return (
		<div className="contact-page-wrapper">
			<div className="contact-page-wrapper__container">
				{/* Bread-Crumbs */}
				<div className="contact-page-wrapper__container__bread-crumbs">
					<Link href="./">
						<FontAwesomeIcon icon={faHome} />
						<span>Homepage</span>
					</Link>
					<Link href="contact">
						<FontAwesomeIcon icon={faAnglesRight} />
						<span>Contact</span>
					</Link>
				</div>
				{/* Header Contact Area */}
				<div className="contact-page-wrapper__container__contact-header">
					<div className="contact-page-wrapper__container__contact-header__contact-info">
						<ContactCard />
					</div>
					<div className="contact-page-wrapper__container__contact-header__contact-form">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactHeader;
