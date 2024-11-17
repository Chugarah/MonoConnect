import { memo } from "react";
import { Input } from "@/components/ui/input";
import type { UseFormRegister } from "react-hook-form";
import type { ContactFormSchema } from "@/lib/validation/schemas/contactForm";
import type { apiResponseProp } from "@/types/api/global";

/**
 * Props interface for the FormInput component
 * @interface FormInputProps
 * @property {UseFormRegister<ContactFormSchema>} register - React Hook Form register function
 * @property {keyof ContactFormSchema} name - Field name from the form schema
 * @property {string} label - Label text for the input field
 * @property {string} [type] - HTML input type, defaults to "text"
 * @property {boolean} [error] - Whether the field has validation errors
 * @property {Function} setApiMessage - Function to set API response messages
 * @property {boolean} isLoading - Whether the form is in loading state
 */
interface FormInputProps {
	register: UseFormRegister<ContactFormSchema>;
	name: keyof ContactFormSchema;
	label: string;
	type?: string;
	error?: boolean;
	setApiMessage: (message: apiResponseProp<{ message: string }> | null) => void;
	isLoading: boolean;
}

// Decided to move out the form input to its own component, ContactForm got to big.
// And we are using memo and useMemo

/**
 * A memoized form input component that integrates with React Hook Form
 *
 * This component provides a reusable form input with label and error handling.
 * It's optimized for performance using React.memo to prevent unnecessary re-renders.
 *
 * @component
 * @param {FormInputProps} props - Component props
 * @param {UseFormRegister<ContactFormSchema>} props.register - React Hook Form register function
 * @param {keyof ContactFormSchema} props.name - Field name from the form schema
 * @param {string} props.label - Label text for the input field
 * @param {string} [props.type="text"] - HTML input type
 * @param {boolean} [props.error] - Whether the field has validation errors
 * @param {Function} props.setApiMessage - Function to set API response messages
 * @param {boolean} props.isLoading - Whether the form is in loading state
 *
 * @example
 * ```tsx
 * <FormInput
 *   register={register}
 *   name="email"
 *   label="Email Address"
 *   type="email"
 *   error={!!errors.email}
 *   setApiMessage={setApiMessage}
 *   isLoading={isLoading}
 * />
 * ```
 *
 * @returns {React.ReactElement} A form input field with label
 */
const FormInput = memo(function FormInput({
	register,
	name,
	label,
	type = "text",
	error,
	setApiMessage,
	isLoading,
}: FormInputProps) {
	return (
		<div className="contact-form__container__form-item">
			<label htmlFor={`contact-form-${name}`}>{label}</label>
			<Input
				{...register(name)}
				onChange={async (e) => {
					try {
						await register(name).onChange(e);
						setApiMessage(null);
					} catch (error) {
						console.error("Error in input onChange:", error);
					}
				}}
				type={type}
				id={`contact-form-${name}`}
				variant="primary"
				className="contact-form__container__form-item__field-input"
				data-error={error}
				error={error}
				disabled={isLoading}
			/>
		</div>
	);
});

export default FormInput;
