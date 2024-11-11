import ButtonForm from "@/app/components/forms/ButtonForm";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function AppDescription() {
	return (
		<>
			<section aria-label="App Description" className="app-description-wrapper">
				<div className="app-description">
					{/* Section 1 Text */}
					<div className="app-description__section">
						<div className="app-description__section__text-wrapper">
							<h2>Make your money transfer simple and clear</h2>
							<div>
								<p>
									<FontAwesomeIcon
										icon={faCircleCheck}
										title="Icon Circle Check"
										className="app-description__section__text-wrapper__fa-circle-check"
									/>
									Banking transactions are free for you
								</p>
								<p>
									<FontAwesomeIcon
										icon={faCircleCheck}
										title="Icon Circle Check"
										className="app-description__section__text-wrapper__fa-circle-check"
									/>
									No monthly cash commission
								</p>
								<p className="app-description__section__lastp-p-element">
									<FontAwesomeIcon
										icon={faCircleCheck}
										title="Icon Circle Check"
										className="app-description__section__text-wrapper__fa-circle-check"
									/>
									Manage payments and transactions online
								</p>
							</div>
						</div>
						<ButtonForm
							icon={faArrowRight}
							iconPosition="right"
							title="Learn More"
							className="app-description__section__primary-button"
						>
							Learn More
						</ButtonForm>
					</div>
					{/* Section 1 Image */}
					<div className="app-description__section">
						<Image
							alt="App Balance Image"
							src="/images/app-description/app-description-balance.svg"
							height={0}
							width={0}
							className="app-description__section__balance-image"
						/>
						<Image
							alt="App User Image"
							src="/images/app-description/app-description-balance-user.svg"
							height={0}
							width={0}
							className="app-description__section__user-image"
						/>
					</div>
				</div>
				<div className="app-description">
					{/* Section 2 Image */}
					<div className="app-description__section">
						<Image
							alt="Contact Users"
							src="/images/app-description/app-description-users.svg"
							height={0}
							width={0}
							className="app-description__section__full-users-image"
						/>
						<Image
							alt="Easy Payment"
							src="/images/app-description/app-description-credit-card.svg"
							height={0}
							width={0}
							className="app-description__section__credit-card-image"
						/>
					</div>
					{/* Section 2 Text */}
					<div className="app-description__section">
						<div
							className="app-description__section__text-wrapper
            app-description__section__text-wrapper--longer"
						>
							<h2>Receive payment from international bank details</h2>
							<div className="app-description__section__text-wrapper app-description__section__text-wrapper--flex">
								<div className="app-description__section__text-wrapper__flex-box">
									<Image
										alt="Easy Payment"
										src="/images/app-features/credit-card.svg"
										width={0}
										height={0}
									/>
									<p>
										Manage your payments online. Mollis congue egestas egestas
										fermentum fames.
									</p>
								</div>
								<div className="app-description__section__text-wrapper__flex-box">
									<Image
										alt="Wallet Payment"
										src="/images/app-features/credit-card.svg"
										width={0}
										height={0}
									/>
									<p>
										A elementur and imperdiet enim, pretium etiam facilisi
										aenean quam mauris.
									</p>
								</div>
							</div>
							<ButtonForm
								icon={faArrowRight}
								iconPosition="right"
								title="Learn More"
								className="app-description__section__primary-button"
							>
								Learn More
							</ButtonForm>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AppDescription;
