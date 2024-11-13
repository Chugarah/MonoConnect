"use client";
import type { Testimonial } from "@/types/api/testimonialsTypes";
import { TestimonialsContext } from "./TestimonialsContext";
import { useState, useEffect, useCallback } from "react";
import { fetchData } from "@/app/api/fetchData";

/**
 * TestimonialsProvider component that manages testimonial data and provides it through context.
 * This component fetches testimonial data from an API and maintains the state of testimonials,
 * loading status, errors, and success/failure messages.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components that will have access to the testimonials context
 * @returns {JSX.Element} A context provider component wrapping the children
 *
 * @example
 * ```tsx
 * <TestimonialsProvider>
 *   <App />
 * </TestimonialsProvider>
 * ```
 */
export function TestimonialsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	/**
	 * State for storing the array of testimonials
	 * @type {[Testimonial[], React.Dispatch<React.SetStateAction<Testimonial[]>>]}
	 */
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

	/**
	 * State for tracking the loading status of testimonial data
	 * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
	 */
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * State for storing any errors that occur during data fetching
	 * @type {[Error | null, React.Dispatch<React.SetStateAction<Error | null>>]}
	 */
	const [error, setError] = useState<Error | null>(null);

	/**
	 * State for storing success/error messages
	 * @type {[string | null, React.Dispatch<React.SetStateAction<string | null>>]}
	 */
	const [message, setMessage] = useState<string | null>(null);

	/**
	 * Fetches testimonials data from the API endpoint.
	 * This function is memoized using useCallback to maintain referential stability
	 * and prevent unnecessary re-renders.
	 *
	 * The function includes:
	 * - Loading state management
	 * - Error handling
	 * - Data processing
	 * - Message updates
	 *
	 * @async
	 * @function
	 * @returns {Promise<void>}
	 *
	 * @throws {Error} When the API request fails
	 *
	 * @example
	 * ```tsx
	 * await fetchTestimonials();
	 * ```
	 */
	const fetchTestimonials = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await fetchData<Testimonial[]>(
				"https://win24-assignment.azurewebsites.net/api/testimonials",
				{
					simulateLoading: true,
					loadingTime: 5000,
				},
			);

			if (response.error) {
				setError(response.error);
				setMessage(response.message || "Failed to load Testimonial data");
			} else {
				setTestimonials(response.data || []);
				setMessage(response.message || "Data Loaded :)");
			}
		} catch (error) {
			setError(
				error instanceof Error
					? error
					: new Error("Failed to fetch testimonials"),
			);
			setMessage("Failed to load testimonials");
		} finally {
			setIsLoading(false);
		}
	}, []);

	/**
	 * Effect hook that triggers testimonial data fetching when the component mounts.
	 * The effect depends on fetchTestimonials, which is safe because it's memoized.
	 *
	 * @effect
	 * @listens fetchTestimonials
	 */
	useEffect(() => {
		/*
    113:3  Error: Promises must be awaited, end with a call to .catch, end with a call to
    .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
    @typescript-eslint/no-floating-promises
    */
		// Create an async function inside useEffect
		const initializeTestimonials = async () => {
			try {
				await fetchTestimonials();
			} catch (error) {
				console.error("Failed to initialize testimonials:", error);
			}
		};

		// Call and handle the promise with void operator
		void initializeTestimonials();
	}, [fetchTestimonials]);

	return (
		<TestimonialsContext.Provider
			value={{
				testimonials,
				apiResponseProp: {
					isLoading,
					error,
					message,
				},
				refreshTestimonials: fetchTestimonials,
			}}
		>
			{children}
		</TestimonialsContext.Provider>
	);
}
