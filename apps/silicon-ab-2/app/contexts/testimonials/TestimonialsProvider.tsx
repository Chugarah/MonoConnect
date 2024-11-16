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
	 * @type {Array<Testimonial>}
	 */
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

	/**
	 * State for tracking the loading status of testimonial data
	 * @type {boolean}
	 */
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * State for storing any errors that occur during data fetching
	 * @type {Error | null}
	 */
	const [error, setError] = useState<Error | null>(null);

	/**
	 * State for storing success/error messages
	 * @type {string | null}
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
	 * @function fetchTestimonials
	 * @returns {Promise<void>} A promise that resolves when the data fetching is complete
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
					expectsData: true,
				},
			);

			if (response.error) {
				setError(response.error);
				setMessage(response.message || "Failed to load Testimonial data");
				setTestimonials([]);
			} else if (Array.isArray(response.data)) {
				setTestimonials(response.data);
				setError(null);
				setMessage(response.message || "Data Loaded :)");
			} else {
				throw new Error("Invalid testimonial data format");
			}
		} catch (error) {
			setError(
				error instanceof Error
					? error
					: new Error("Failed to fetch testimonials"),
			);
			setMessage("Failed to load testimonials");
			setTestimonials([]);
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
		/**
		 * Initializes the testimonials by fetching data from the API.
		 * This function is called when the component mounts.
		 *
		 * @async
		 * @function initializeTestimonials
		 * @returns {Promise<void>} A promise that resolves when the initialization is complete
		 */
		const initializeTestimonials = async () => {
			try {
				await fetchTestimonials();
			} catch (error) {
				setError(
					error instanceof Error
						? error
						: new Error("Failed to activate fetchFaqData"),
				);
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
