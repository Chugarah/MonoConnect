"use client";

import { companyLogosConfig } from "@/config/images/company-logos";
import Image from "next/image";
import { motion } from "framer-motion";

function CompanyLogos() {
	return (
		<section aria-label="Company Logos">
			<div className="company-logos">
				{companyLogosConfig.Logos.map((logo) => (
					<motion.div
						id={logo.id}
						key={logo.id}
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
