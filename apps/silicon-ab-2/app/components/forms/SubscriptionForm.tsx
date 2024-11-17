"use client";

// UI Components https://ui.shadcn.com/docs/components/form
// Form Engine https://react-hook-form.com/ts
// Form Validation https://github.com/fabien0102/ts-to-zod
// Used AI Phind to help me with documentation and some of the tricky part of implementing
// validation and form submission, the 100% AI Generated part is
// Also god inspired and copied some of the code from Hans
// 1. https://www.youtube.com/watch?v=CZ89e00h8dY&t=26s (Modern way)
// 2. https://www.youtube.com/watch?v=qkDkUI4sgmI&t=6s (Basic and important)
// 3. https://www.youtube.com/watch?v=E8lOEg6MmtY (Posting Data to API Server by Hans)
/**
function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { IconFA } from "@/app/components/common/IconFA";
import { Input } from "@/components/ui/input";
import ButtonForm from "@/app/components/forms/ButtonForm";
import {
	subscriptionSchema,
	type SubscriptionSchema,
} from "@/lib/validation/schemas/subscription";
import { useForm } from "react-hook-form";
import FormError from "@/app/components/forms/FormError";
import { useState, useEffect } from "react";
import { fetchData } from "@/app/api/fetchData";
import type { apiResponseProp } from "@/types/api/global";
import * as React from "react";

function SubscriptionForm() {
	// We need to add Loading Indicator when we are Submitting our form
	const [isLoading, setIsLoading] = useState(false);

	// This was painful to solve, We used typescript here and AI helped me a lot here. We a
	// are using our global.d.ts API Response type where we have generic parameter as input,
	// we are extracting the message and we set it that it can be null so we don't linting errors
	// of possible null
	const [apiMessage, setApiMessage] = useState<apiResponseProp<{
		message: string;
	}> | null>(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionSchema),
	});

	// We got an small bug where if we change our mail after we made an api response that error out
	// we get normal error message overlapping our api response, to fix that we created an
	// useEffect to watch the whole form and if any of form field is changed.
	useEffect(() => {
		const subscription = watch(() => {
			// Reset API message whenever any field changes
			setApiMessage(null);
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	// This is where we handle the submit if validation is completed

	const onSubmit = async (data: SubscriptionSchema) => {
		setIsLoading(true);
		setApiMessage(null);

		// To able to use apiResponse outside out try block we declare it
		// Let, got helped from AI Phind with this solution and than
		// We need to set the values to null to init it and make our linters
		let apiResponse: apiResponseProp<{ message: string }> = {
			data: null,
			error: null,
			message: null,
			isLoading: false,
		};

		try {
			const response = await fetchData<{ message: string }>(
				"https://win24-assignment.azurewebsites.net/api/forms/subscribe",
				{
					simulateLoading: true,
					loadingTime: 5000,
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: data.email }),
					expectsData: false,
				},
			);
			apiResponse = response;
		} catch (err) {
			setApiMessage({
				error: err instanceof Error ? err : new Error("Failed to subscribe"),
				message: "Failed to subscribe to newsletter",
				isLoading: false,
				data: null,
			});
		} finally {
			setIsLoading(false);
			if (apiResponse?.data) {
				setApiMessage({
					error: null,
					message: apiResponse.message || "Successfully subscribed!",
					isLoading: false,
					data: apiResponse.data,
				});
			}
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="newsletter" noValidate>
				<div className="newsletter__field">
					<IconFA
						icon={faEnvelope}
						classNames="newsletter__field-icon"
						title="Email Icon"
					/>
					{/* This is the magic happens for Zod :) validation*/}
					<Input
						{...register("email", {
							onChange: () => setApiMessage(null),
						})}
						type="email"
						variant="primary"
						placeholder="Your Email"
						className="newsletter__field-input"
						error={!!errors.email}
						disabled={isLoading}
					/>
					{/* Display Error message */}
					{errors.email && (
						<FormError
							id="email-error"
							className={`newsletter__${errors.email ? "error" : ""}`}
							message={errors.email.message}
						/>
					)}
					{/* Display API message */}
					{/* We are using coalescent if statement and attacking css suffix */}
					{apiMessage && (
						<FormError
							id="api-response"
							className={`newsletter__${apiMessage?.error ? "error" : "success"}`}
							message="Thank you for subscribing"
						/>
					)}
				</div>

				{/* We took inspiration and documentation from ChadCN UO
        https://ui.shadcn.com/docs/components/button*/}
				<ButtonForm
					type="submit"
					variant={isLoading ? "loading" : "button-primary"}
					className="newsletter__submit"
					iconPosition="hidden"
					disabled={isLoading}
					data-loading-text="Please wait..."
				>
					Subscribe
				</ButtonForm>
			</form>
		</>
	);
}

export default SubscriptionForm;
