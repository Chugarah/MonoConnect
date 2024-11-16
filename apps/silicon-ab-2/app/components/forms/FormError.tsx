import type { FormErrorProps } from "@/types/forms/global";
import { motion } from "framer-motion";

/**
 * FormsError component to display form error messages.
 *
 * @param {FormErrorProps} props - The properties for the FormsError component.
 * @param {string} [props.message] - The error message to display. If null, no error will be displayed.
 * @param {string} [props.id] - The id attribute for the error message element.
 * @param {string} [props.classNames] - Additional class names for styling the error message element.
 * @returns {JSX.Element | null} The JSX element for the error message or null if no message is provided.
 */
function FormError({ message, id, className }: FormErrorProps) {
	// If message is null don't display any error

	if (!message) return null;

	return (
		<motion.p
			id={id}
			className={className}
			role="alert"
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
		>
			* {message}
		</motion.p>
	);
}

export default FormError;
