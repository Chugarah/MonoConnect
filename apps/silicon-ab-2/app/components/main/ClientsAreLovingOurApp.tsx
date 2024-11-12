import Stars from "@/app/components/common/Stars";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

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
				<div className="clients-app__client-test-card">
					{/* Quote Icon */}

					<Image
						className="clients-app__client-test-card__icon"
						src="/images/common/quoto-icon.svg"
						alt="Quote Icon"
						width={0}
						height={0}
					/>
					<div className="clients-app__client-test-card__stars-container">
						{/* Starts */}
						<Stars
							icon={faStar}
							count={4}
							classNames="clients-app__client-test-card__stars-container--yellow-star"
						/>
						<Stars
							icon={faStar}
							count={1}
							classNames="clients-app__client-test-card__stars-container--neutral-star"
						/>
					</div>

					{/* Text */}
					<p>
						Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
						Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.
						Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
					</p>
					<div className="clients-app__client-test-card__user-avatar">
						<Image
							className="clients-app__client-test-card__user-avatar__img"
							src="/images/avatars/avatar-female.svg"
							alt="Female Avatar"
							width={0}
							height={0}
						/>
						<div>
							<p>Fannie Summers</p>
							<p>Designer</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ClientsAreLovingOurApp;
