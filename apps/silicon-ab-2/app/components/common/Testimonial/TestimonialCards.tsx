"use client";
import Stars from "@/app/components/common/Stars";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useTestimonials } from "@/app/contexts/testimonials/hooks/useTestimonials";
import TestimonialCardSkeleton from "@/app/components/skeletons/TestimonialCardSkeleton";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialError from "@/app/components/common/Testimonial/TestimonialError";
import { memo } from "react";

const TestimonialCards = memo(function TestimonialCards() {
	const { testimonials, apiResponseProp } = useTestimonials();

	// Create an array of unique identifiers for stars
	const skeletonCards = ["sk-1", "sk-2"];

	if (apiResponseProp.isLoading)
		// If our use state is loading show loading indicator
		// Added Skeleton from Chad CN UI and used AI Phind to convert
		// the original code to use TailwindCSS only
		return (
			<>
				{skeletonCards.map((id) => (
					<TestimonialCardSkeleton key={id} />
				))}
			</>
		);
	if (apiResponseProp.error)
		return (
			<>
				<TestimonialError />
			</>
		);

	// Using Framer-Motion to make nifty beautiful animation https://motion.dev/
	return (
		<>
			<AnimatePresence>
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={testimonial.id}
						className="clients-app__client-test-card"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: index * 0.15 }}
					>
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
								count={testimonial.starRating}
								classNames="clients-app__client-test-card__stars-container--yellow-star"
							/>
							<Stars
								icon={faStar}
								count={5 - testimonial.starRating}
								classNames="clients-app__client-test-card__stars-container--neutral-star"
							/>
						</div>

						{/* Text */}
						<p>{testimonial.comment}</p>
						<div className="clients-app__client-test-card__user-avatar">
							{/* Simple way to get the file name from url, I used Phind AI to help me to complete
            that task */}
							<Image
								className="clients-app__client-test-card__user-avatar__img"
								src={`/images/avatars/${
									testimonial.avatarUrl.split("/").pop() || ""
								}`}
								alt={`${testimonial.author} Avatar`}
								width={0}
								height={0}
							/>
							<div>
								<p>{testimonial.author}</p>
								<p>{testimonial.jobRole}</p>
							</div>
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</>
	);
});

export default TestimonialCards;
