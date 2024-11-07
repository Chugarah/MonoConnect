import ThemeImagesFiles from "@/app/components/common/ThemeImagesFiles";
import ButtonForm from "@/app/components/forms/ButtonForm";
import ThemeImages from "@/app/components/header/ThemeImages";

/**
 * AppLinks component renders links to the Apple Store and Android Store.
 * It uses ButtonForm and ThemeImages components to display themed buttons.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing store links.
 */
function AppLinks() {
	return (
		<div className="apps-links">
			{/* Apple Store Link */}
			<a href="/" title="Apple Store Link">
				<ButtonForm
					title="App Store Link"
					className="apps-links__button-store-link"
					iconPosition="hidden"
				>
					<ThemeImages
						lightSrc={ThemeImagesFiles.appStore.light}
						darkSrc={ThemeImagesFiles.appStore.dark}
						alt="Apple Link"
						width={0}
						height={0}
					/>
				</ButtonForm>
			</a>

			{/* Android Store Link */}
			<a href="/" title="Android Store Link">
				<ButtonForm
					title="Android Store Link"
					className="apps-links__button-store-link"
					iconPosition="hidden"
				>
					<ThemeImages
						lightSrc={ThemeImagesFiles.androidStore.light}
						darkSrc={ThemeImagesFiles.androidStore.dark}
						alt="Android Link"
						width={0}
						height={0}
					/>
				</ButtonForm>
			</a>
		</div>
	);
}

export default AppLinks;
