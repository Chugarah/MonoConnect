import ThemeImagesFiles from "@/app/components/common/ThemeImagesFiles";
import ThemeImages from "@/app/components/header/ThemeImages";

function MobileImages() {
	return (
		<div className="mobile-images">
			<div className="mobile-images__image-wrapper">
				<ThemeImages
					lightSrc={ThemeImagesFiles.heroPhone1.light}
					darkSrc={ThemeImagesFiles.heroPhone1.dark}
					alt="Iphone 1"
					width={0}
					height={0}
					className="mobile-images__image-wrapper__iphone-1"
				/>
				<ThemeImages
					lightSrc={ThemeImagesFiles.heroPhone2.light}
					darkSrc={ThemeImagesFiles.heroPhone2.dark}
					alt="Iphone 2"
					width={0}
					height={0}
					className="mobile-images__image-wrapper__iphone-2"
				/>
			</div>
		</div>
	);
}

export default MobileImages;
