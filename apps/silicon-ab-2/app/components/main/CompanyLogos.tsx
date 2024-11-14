"use client";

import { companyLogosConfig } from "@/config/images/company-logos";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

/**
 * CompanyLogos Component
 *
 * @component
 * @description Renders a section displaying company logos in a grid layout.
 * The component uses Framer Motion for animations and Next.js Image component
 * for optimized image loading. Each logo is rendered within a motion.div
 * container for animation capabilities.
 *
 * The component is marked with "use client" directive for client-side rendering
 * and follows BEM naming conventions for CSS classes. It includes proper ARIA
 * labels for accessibility.
 *
 * The logos are configured through companyLogosConfig and each logo item gets
 * a unique ID generated using uuid.
 *
 * @example
 * ```jsx
 * <CompanyLogos />
 * ```
 *
 * @returns {JSX.Element} A section containing animated company logo images
 */
function CompanyLogos() {
	return (
		<section aria-label="Company Logos" className="company-logos-wrapper">
			<div className="company-logos">
				{companyLogosConfig.Logos.map((logo) => (
					<motion.div
						id={logo.id}
						key={uuidv4()}
						className="company-logos__image-item"
					>
						<Image
							src={logo.src}
							alt={logo.alt}
							width={0}
							height={0}
							className="w-full"
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default CompanyLogos;
