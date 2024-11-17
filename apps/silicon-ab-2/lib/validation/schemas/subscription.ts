import { z } from "zod";

/** Used Email Regexp from this https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
 * Tested the regex here: https://regex-generator.olafneumann.org/
 * Schema for validating subscription form data using Zod validation chaining.
 *
 * Zod allows chaining multiple validations together using method chaining.
 * Each validation method returns a new schema with the added validation rule.
 * The validations are executed in order from left to right.
 *
 * The schema validates:
 * - `email`: A required string field with the following validation chain:
 *   1. `.min(1)` - Ensures email is not empty
 *   2. `.email()` - Validates email format
 *   3. `.regex()` - Applies detailed RFC 5322 email pattern matching
 *   4. `.max(125)` - Restricts maximum length
 *
 * @example
 * // Valid usage
 * const validData = { email: "example@example.com" };
 * subscriptionSchema.parse(validData); // Passes validation
 *
 * @example
 * // Invalid usage - will throw validation error
 * const invalidData = { email: "invalid-email" };
 * subscriptionSchema.parse(invalidData);
 *
 * @example
 * // Validation chain breakdown
 * z.string()                    // Base validation - must be string
 *  .min(1, "...")              // First validation in chain
 *  .email("...")               // Second validation in chain
 *  .regex(emailRegex, "...")   // Third validation in chain
 *  .max(125, "...")           // Fourth validation in chain
 */
export const subscriptionSchema = z.object({
	email: z
		.string()
		.min(1, "Email address is required :)")
		.email("Invalid email address")
		.regex(
			new RegExp(
				`
				(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+
				(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|
				"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|
				\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@
				(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+
				[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
				\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}
				(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|
				[a-z0-9-]*[a-z0-9]:
				(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|
				\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])
			`.replace(/\s+/g, ""), // Remove all whitespace
				"i", // Case insensitive flag
			),
			"Email format is invalid",
		)
		.max(125, "Your Email is too long, shorten it :D"),
});

/**
 * Type definition inferred from the subscription schema.
 *
 * Zod provides type inference through z.infer<T> which extracts the TypeScript
 * type from the validation schema. This ensures type safety between your
 * validation rules and TypeScript types.
 *
 * @typedef {Object} SubscriptionSchema
 * @property {string} email - A valid email address string that passes all chain validations
 */
export type SubscriptionSchema = z.infer<typeof subscriptionSchema>;
