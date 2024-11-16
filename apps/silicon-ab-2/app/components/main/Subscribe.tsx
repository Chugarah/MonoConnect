import SubscriptionForm from "@/app/components/forms/SubscriptionForm";
import Image from "next/image";

function Subscribe() {
	return (
		<section className="subscribe" aria-label="Subscribe to our newsletter">
			<div className="subscribe__container">
				<div className="subscribe__wrapper">
					<div className="subscribe__media">
						<Image
							src="/images/common/subscribe-bell.svg"
							alt="Ring Bell, Subscribe Image"
							width={0}
							height={0}
							className="subscribe__media-icon"
						/>
						<div className="subscribe__media-text">
							<h4 className="subscribe__title subscribe__title--desktop">
								Subscribe to our newsletter to stay informed about latest
								updates
							</h4>
							<h4 className="subscribe__title subscribe__title--mobile">
								Subscribe to our newsletter
							</h4>
						</div>
					</div>
					<SubscriptionForm />
				</div>
			</div>
		</section>
	);
}

export default Subscribe;
