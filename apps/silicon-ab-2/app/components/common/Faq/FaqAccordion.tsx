"use client";
import FaqError from "@/app/components/common/Faq/FaqError";
import FaqAccordionSkeleton from "@/app/components/skeletons/FaqAccordionSkeleton";
import { useFaq } from "@/app/contexts/faqAccordion/hooks/useFaq";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const useResponsive = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return { isMobile };
};

function FaqAccordion() {
	const { faq, apiResponseProp } = useFaq();
	const [activeId, setActiveId] = useState<string | null>(null);
	const { isMobile } = useResponsive();

	useEffect(() => {
		if (faq?.length > 0 && faq[0]?.id) {
			setActiveId(faq[0].id);
		}
	}, [faq]);

	const toggleAccordion = (id: string) => {
		setActiveId((currentId) => (currentId === id ? null : id));
	};

	const variants = {
		mobile: {
			initial: { height: 0 },
			animate: {
				height: "auto",
				transition: { duration: 0.15 },
			},
			exit: {
				height: 0,
				transition: { duration: 0.15 },
			},
		},
		desktop: {
			initial: { height: 0 },
			animate: {
				height: "auto",
				transition: { duration: 0.2 },
			},
			exit: {
				height: 0,
				transition: { duration: 0.2 },
			},
		},
	};

	if (apiResponseProp.isLoading) {
		return <FaqAccordionSkeleton />;
	}

	if (apiResponseProp.error) {
		return <FaqError />;
	}

	return (
		<div className="faq__faq-accordion">
			{faq.map((faqData, index) => (
				<div
					key={faqData.id}
					className={cn({
						"faq__faq-accordion__container": true,
						"faq__faq-accordion__container--border-radius-top": index === 0,
						"faq__faq-accordion__container--border-radius-bottom":
							index === faq.length - 1,
						"faq__faq-accordion__container--active": activeId === faqData.id,
					})}
				>
					<div
						className="faq__faq-accordion__container__title"
						onClick={() => toggleAccordion(faqData.id)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleAccordion(faqData.id);
							}
						}}
					>
						<p>{faqData.title}</p>
						<Button
							variant="outline"
							size="icon"
							className={cn("faq__faq-accordion__container__title__button", {
								"faq__faq-accordion__container__title__button--active":
									activeId === faqData.id,
							})}
						>
							<FontAwesomeIcon
								icon={faChevronUp}
								className={cn("faq__faq-accordion__container__title__icon", {
									"faq__faq-accordion__container__title__icon--active":
										activeId === faqData.id,
								})}
								size="sm"
								style={{
									transform:
										activeId === faqData.id ? "rotate(0deg)" : "rotate(180deg)",
									transition: "transform 0.2s ease",
								}}
							/>
						</Button>
					</div>
					<AnimatePresence mode="wait">
						{activeId === faqData.id && (
							<motion.div
								className={cn("faq__faq-accordion__container__content", {
									"faq__faq-accordion__container__content--mobile": isMobile,
									"faq__faq-accordion__container__content--desktop": !isMobile,
								})}
								variants={isMobile ? variants.mobile : variants.desktop}
								initial="initial"
								animate="animate"
								exit="exit"
								viewport={{
									once: true,
									amount: 0.25,
								}}
								style={{ overflow: "hidden" }}
							>
								<div
									className={cn("faq__faq-accordion__container", {
										"faq__faq-accordion__container__content--mobile": isMobile,
										"faq__faq-accordion__container__content--desktop":
											!isMobile,
									})}
								>
									<p>{faqData.content}</p>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
}

export default FaqAccordion;
