import AppLinks from "@/app/components/hero/AppLinks";
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
				</div>
			</section>
		</>
	);
}

export default Hero;
