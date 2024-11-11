import Image from "next/image";
function AppFeatures() {
	return (
		<>
			<section aria-label="App Features" className="app-features-wrapper">
				<div className="app-features">
					{/* Phone Image */}
					<Image
						src="/images/app-features/phone-app-features.svg"
						alt="Iphone showing App features"
						width={348}
						height={684}
						className="app-features__phone-image"
					/>
					<div>
						<h1 className="app-features__heading">App Features</h1>
						<p className="app-features__p-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							volutpat mollis egestas. Nam luctus facilisis ultrices.
							Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
						</p>
						<div className="app-features__app-features-cards">
							<div className="app-features__app-features-cards__card">
								<Image
									src="/images/app-features/credit-card.svg"
									alt="App Features - Credit Card"
									width={28}
									height={28}
									className="app-features__app-features-cards__card__img"
								/>
								<div className="app-features__app-features-cards__card__card-item">
									<h5>Easy Payments</h5>
									<p>
										Id mollis consectetur congue egestas egestas suspendisse
										blandit justo.
									</p>
								</div>
							</div>
							<div className="app-features__app-features-cards__card">
								<Image
									src="/images/app-features/shield.svg"
									alt="App Features - Data Security"
									width={28}
									height={28}
									className="app-features__app-features-cards__card__img"
								/>
								<div className="app-features__app-features-cards__card__card-item">
									<h5>Data Security</h5>
									<p>
										Augue pulvinar justo, fermentum fames aliquam accumsan
										vestibulum non.
									</p>
								</div>
							</div>
							<div className="app-features__app-features-cards__card">
								<Image
									src="/images/app-features/bars-graphic.svg"
									alt="App Features - Cost Statistics"
									width={28}
									height={28}
									className="app-features__app-features-cards__card__img"
								/>
								<div className="app-features__app-features-cards__card__card-item">
									<h5>Cost Statistics</h5>
									<p>
										Mattis urna ultricies non amet, purus in auctor non. Odio
										vulputate ac nibh.
									</p>
								</div>
							</div>
							<div className="app-features__app-features-cards__card">
								<Image
									src="/images/app-features/communication.svg"
									alt="App Features - Support 24/7"
									width={28}
									height={28}
									className="app-features__app-features-cards__card__img"
								/>
								<div className="app-features__app-features-cards__card__card-item">
									<h5>Support 24/7</h5>
									<p>
										A elementum, imperdiet enim, pretium etiam facilisi in
										aenean quam mauris.
									</p>
								</div>
							</div>
							<div className="app-features__app-features-cards__card">
								<Image
									src="/images/app-features/wallet.svg"
									alt="App Features - Regular Cashback"
									width={28}
									height={28}
									className="app-features__app-features-cards__card__img"
								/>
								<div className="app-features__app-features-cards__card__card-item">
									<h5>Regular Cashback</h5>
									<p>
										Sit facilisis dolor arcu, fermentum vestibulum arcu
										elementum imperdiet eleifend.
									</p>
								</div>
							</div>
							<div className="app-features__app-features-cards__card">
								<Image
									src="/images/app-features/happy.svg"
									alt="App Features - Top Standards"
									width={28}
									height={28}
									className="app-features__app-features-cards__card__img"
								/>
								<div className="app-features__app-features-cards__card__card-item">
									<h5>Top Standards</h5>
									<p>
										Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
										id. Sit facilisis dolor arcu.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AppFeatures;
