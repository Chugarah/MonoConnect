// https://github.com/colinhacks/zod
// Used AI Phind to talk to the documentation to make the solution below
// Logic, start with he scheme and than implement it in your form component

import { z } from "zod";

/**
 * Schema for validating subscription form data.
 *
 * This schema validates the following:
 * - `email`: A required string that must be a valid email address and must not exceed 125 characters.
 *
 * @example
 * const validData = { email: "example@example.com" };
 * subscriptionSchema.parse(validData); // This will pass validation
 *
 * @example
 * const invalidData = { email: "invalid-email" };
 * subscriptionSchema.parse(invalidData); // This will throw a validation error
 */
export const subscriptionSchema = z.object({
	email: z
		.string()
		.min(1, "Email address is required :)") // Ensures the email field is not empty
		.email("Invalid email address") // Ensures the email field contains a valid email address
		.max(125, "Your Email is too long, shorten it :D"), // Ensures the email field does not exceed 125 characters
});

/**
 * Type definition for the subscription schema.
 *
 * This type is inferred from the `subscriptionSchema` and can be used for type-checking
 * subscription form data throughout the application.
 */
export type SubscriptionSchema = z.infer<typeof subscriptionSchema>;
