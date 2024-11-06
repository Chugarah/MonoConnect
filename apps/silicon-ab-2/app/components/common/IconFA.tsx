/// Used ChadCN UI Documentation and used 100& AI Phind helping me integrating FA-icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import type { IconFAProps } from "@/types/theme/themeTypes";

/**
 * IconFA Component
 *
 * A wrapper component for FontAwesome icons that provides consistent styling and accessibility.
 *
 * @component
 * @param {Object} props - The component props
 * @param {IconDefinition} props.icon - The FontAwesome icon to display
 * @param {string} [props.classNames] - Additional CSS classes to apply to the icon
 * @param {string} [props.title] - The title/tooltip text for the icon. Also controls aria-hidden
 *
 * @example
 * ```jsx
 * <IconFA
 *   icon={faUser}
 *   classNames="custom-class"
 *   title="User Profile"
 * />
 * ```
 */
const IconFA = ({ icon, classNames, title }: IconFAProps) => {
	return (
		<FontAwesomeIcon
			icon={icon}
			className={cn("icon-fa", classNames)}
			title={title}
			aria-hidden={!title}
		/>
	);
};

IconFA.displayName = "IconFA";

export { IconFA };
