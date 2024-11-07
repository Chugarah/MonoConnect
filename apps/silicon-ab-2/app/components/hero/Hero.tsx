import ButtonForm from "@/app/components/forms/ButtonForm";
import AppLinks from "@/app/components/hero/AppLinks";
import MobileImages from "@/app/components/hero/MobileImages";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Hero() {
	return (
		<>
			<section aria-label="Hero & Promotion Section">
				<div className="hero-section">
					<p className="hero-section__heading">
						Manage All Your Money in One App
					</p>
					<p className="hero-section__text-description">
						We offer you a new generation of the mobile banking. Save, spend &
						manage money in your pocket.
					</p>
					<AppLinks />
					<div className="hero-section__discover-more">
						<ButtonForm
							variant="link"
							icon={faChevronDown}
							iconClassName="hero-section__discover-more__icon"
							className="hero-section__discover-more__button"
						>
							Discover More
						</ButtonForm>
					</div>
					<MobileImages />
				</div>
			</section>
		</>
	);
}

export default Hero;
