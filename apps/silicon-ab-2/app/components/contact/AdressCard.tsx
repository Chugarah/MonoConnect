import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
function AdressCard() {
	return (
		<div className="contact-adress-card">
			{/* MEdical Center 1 */}
			<div className="contact-adress-card__adress-container">
				<h4>Medical Center 1</h4>
				<div className="contact-adress-card__adress-container__icon-flex">
					<FontAwesomeIcon
						icon={faLocationDot}
						className="text-theme-light-primary dark:text-theme-dark-primary text-xl"
					/>
					<p>4517 Washington Ave. Manchester, Kentucky 39495</p>
				</div>
				<div className="contact-adress-card__adress-container__icon-flex">
					<FontAwesomeIcon
						icon={faPhone}
						className="text-theme-light-primary dark:text-theme-dark-primary text-xl"
					/>
					<p>(406) 555-0120</p>
				</div>
				<div className="contact-adress-card__adress-container__icon-flex">
					<FontAwesomeIcon
						icon={faClock}
						className="text-theme-light-primary dark:text-theme-dark-primary text-xl"
					/>
					<div>
						<p className="text-theme-light-forms dark:text-theme-dark-forms text-t-m">
							<span className="font-SemiBold">Mon – Fri:</span> 9:00 am – 22:00
							am
						</p>
						<p className="text-theme-light-forms dark:text-theme-dark-forms text-t-m">
							<span className="font-SemiBold">Sat – Sun:</span> 9:00 am – 20:00
							am
						</p>
					</div>
				</div>
			</div>
			{/* MEdical Center 2 */}
			<div className="contact-adress-card__adress-container">
				<h4>Medical Center 2</h4>
				<div className="contact-adress-card__adress-container__icon-flex">
					<FontAwesomeIcon
						icon={faLocationDot}
						className="text-theme-light-primary dark:text-theme-dark-primary text-xl"
					/>
					<p>2464 Royal Ln. Mesa,New Jersey 45463</p>
				</div>
				<div className="contact-adress-card__adress-container__icon-flex">
					<FontAwesomeIcon
						icon={faPhone}
						className="text-theme-light-primary dark:text-theme-dark-primary text-xl"
					/>
					<p>(406) 544-0123</p>
				</div>
				<div className="contact-adress-card__adress-container__icon-flex">
					<FontAwesomeIcon
						icon={faClock}
						className="text-theme-light-primary dark:text-theme-dark-primary text-xl"
					/>
					<div>
						<p className="text-theme-light-forms dark:text-theme-dark-forms text-t-m">
							<span className="font-SemiBold">Mon – Fri:</span> 9:00 am – 22:00
							am
						</p>
						<p className="text-theme-light-forms dark:text-theme-dark-forms text-t-m">
							<span className="font-SemiBold">Sat – Sun:</span> 9:00 am – 20:00
							am
						</p>
					</div>
				</div>
				<div className="contact-adress-card__adress-container__icon-flex flex-col">
					<Link
						href="https://www.facebook.com/?locale=sv_SE"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							alt="Social stuff"
							src="/images/common/socials.svg"
							width={244}
							height={44}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default AdressCard;
