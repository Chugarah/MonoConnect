"use client";

import TestimonialCards from "@/app/components/common/Testimonial/TestimonialCards";

function ClientsAreLovingOurApp() {
	return (
		<section
			aria-label="Clients Are Loving Our App"
			className="clients-app-wrapper"
		>
			<div className="clients-app">
				<div className="clients-app__client-intro">
					<p>Clients Are Loving Our App</p>
				</div>

				{/* Test Card */}
				<TestimonialCards />
			</div>
		</section>
	);
}

export default ClientsAreLovingOurApp;
