"use client";
import { fetchData } from "@/app/api/fetchData";
import FormError from "@/app/components/forms/FormError";
import {
	contactFormSchema,
	type ContactFormSchema,
} from "@/lib/validation/schemas/contactForm";
import type { apiResponseProp } from "@/types/api/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import ButtonForm from "@/app/components/forms/ButtonForm";
import FormInput from "@/app/components/contact/FormInput";
import FormSelect from "@/app/components/contact/FormSelect";
import { cn } from "@/lib/utils";

/**
 * ContactForm component for handling online consultation requests.
 * Provides a form with validation, loading states, and API integration.
 *
 * @component
 * @returns {JSX.Element} A form component for contact submissions
 */
function ContactForm() {
	// We need to add Loading Indicator when we are Submitting our form
	const [isLoading, setIsLoading] = useState(false);

	// This was painful to solve, We used typescript here and AI helped me a lot here. We a
	// are using our global.d.ts API Response type where we have generic parameter as input,
	// we are extracting the message and we set it that it can be null so we don't linting errors
	// of possible null
	const [apiMessage, setApiMessage] = useState<apiResponseProp<{
		message: string;
	}> | null>(null);

	/**
	 * Form hook setup with zod validation schema
	 */
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<ContactFormSchema>({
		resolver: zodResolver(contactFormSchema),
	});

	/**
	 * Effect to reset API message when form values change
	 */
	useEffect(() => {
		const formContact = watch(() => {
			// Reset API message whenever any field changes
			setApiMessage(null);
		});
		return () => formContact.unsubscribe();
	}, [watch]);

	// This is where we handle the submit if validation is completed

	/**
	 * Handles form submission and API interaction
	 *
	 * @param {ContactFormSchema} data - The validated form data
	 * @returns {Promise<void>}
	 */
	const onSubmit = useCallback(async (data: ContactFormSchema) => {
		setIsLoading(true);
		setApiMessage(null);

		try {
			const response = await fetchData<{ message: string }>(
				"https://win24-assignment.azurewebsites.net/api/forms/contact",
				{
					simulateLoading: true,
					loadingTime: 5000,
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						fullName: data.fullName,
						email: data.email,
						specialist: data.specialist,
					}),
					expectsData: false,
				},
			);

			if (response.data) {
				setApiMessage({
					error: null,
					message:
						"Thank you for contacting us! Our Starcraft Master will contact you shortly to discuss your Pylon needs.",
					isLoading: false,
					data: response.data,
				});
			}
		} catch (err) {
			setApiMessage({
				error: err instanceof Error ? err : new Error("Failed to Submit Form"),
				message: "Not enough minerals! Please try again later.",
				isLoading: false,
				data: null,
			});
		} finally {
			setIsLoading(false);
		}
	}, []); // Empty dependency array since it doesn't depend on any props or state

	// We had an problem where when we are validating our form in the middle of our validation
	// the component just rerendered because of our fetchData is being run in the background
	// in the main that fetches API data to FAQ and Testimonials, To solve this I need help
	// this 100% help from Phind AI and this video https://www.youtube.com/watch?v=lStfMBiWROQ
	// Newer VIdeo https://www.youtube.com/watch?v=vpE9I_eqHdM
	// So the proper way without using advanced frameworks to have component that is frozen or rerendering
	// because of something else is running in the background.

	/**
	 * Memoized form content to prevent unnecessary re-renders
	 *
	 * @returns {JSX.Element} The form JSX with all input fields and error handling
	 */
	const formContent = useMemo(
		() => (
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="contact-form"
				noValidate
			>
				<div className="contact-form__container">
					<h2>Get Online Consultation</h2>
					<FormInput
						register={register}
						name="fullName"
						label="Full name"
						error={!!errors.fullName}
						setApiMessage={setApiMessage}
						isLoading={isLoading}
					/>
					<FormInput
						register={register}
						name="email"
						label="Email address"
						type="email"
						error={!!errors.email}
						setApiMessage={setApiMessage}
						isLoading={isLoading}
					/>
					<FormSelect
						name="specialist"
						label="Specialist"
						error={!!errors.specialist}
						setApiMessage={setApiMessage}
						setValue={setValue}
						isLoading={isLoading}
					/>
					{/* Error MEssages :) */}
					<div className="contact-form__container__form-item">
						{/* Display Error messages */}
						<div className="flex flex-col">
							{errors.fullName && (
								<>
									<h5 className="text-system-error dark:text-system-error p-0 m-0 font-SemiBold">
										You need to construct additional pylons!
									</h5>
									<FormError
										id="full-name-error"
										className="contact-form__error"
										message={errors.fullName.message}
									/>
								</>
							)}
							{errors.email && (
								<FormError
									id="email-error"
									className="contact-form__error"
									message={errors.email.message}
								/>
							)}
							{errors.specialist && (
								<FormError
									id="specialist-error"
									className="contact-form__error"
									message={errors.specialist.message}
								/>
							)}
							{/* Display API message */}
							{apiMessage && (
								<FormError
									id="api-message"
									className={cn(
										apiMessage.error
											? "contact-form__error"
											: "contact-form__success",
									)}
									message={apiMessage.message}
								/>
							)}
						</div>
					</div>

					{/* Button :) */}
					<div className="contact-form__container__form-item">
						{/* We took inspiration and documentation from ChadCN UO
        https://ui.shadcn.com/docs/components/button*/}
						<ButtonForm
							type="submit"
							variant={isLoading ? "loading" : "button-primary"}
							className="contact-form__container__form-item__button"
							iconPosition="hidden"
							disabled={isLoading}
							data-loading-text="Please wait..."
						>
							Build more pylons!
						</ButtonForm>
					</div>
				</div>
			</form>
		),
		[handleSubmit, onSubmit, errors, isLoading, register, setValue, apiMessage],
	);

	return formContent;
}

export default ContactForm;
