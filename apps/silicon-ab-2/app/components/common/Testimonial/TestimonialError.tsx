import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

function TestimonialError() {
	return (
		<>
			<motion.div
				className="clients-app__client-test-card
          text-theme-light-display-headings dark:text-theme-dark-display-headings"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				{/* Quote Icon */}

				<Image
					className="clients-app__client-test-card__icon"
					src="/images/common/quoto-icon.svg"
					alt="Quote Icon"
					width={0}
					height={0}
				/>

				{/* Text */}
				<FontAwesomeIcon
					icon={faCircleExclamation}
					size="3x"
					className="py-20 w-full"
				/>
				<h4 className="text-center text-theme-light-display-headings dark:text-theme-dark-display-headings">
					{" "}
					Failed to Load Testimonial Data!
				</h4>
			</motion.div>
		</>
	);
}

export default TestimonialError;
