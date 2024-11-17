"use client";
import type { Testimonial } from "@/types/api/testimonialsTypes";
import { TestimonialsContext } from "./TestimonialsContext";
import { useState, useEffect, useCallback, useRef } from "react";
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
 * @remarks
 * This provider component handles:
 * - Fetching testimonial data from API
 * - Managing loading states
 * - Error handling and messaging
 * - Caching fetched data
 * - Providing data through context
 *
 * The component uses React hooks for state management and data fetching:
 * - useState for managing testimonials and UI states
 * - useCallback for memoizing the fetch function
 * - useRef for tracking if data has been fetched
 * - useEffect for triggering initial data fetch
 *
 * @example
 * ```tsx
 * <TestimonialsProvider>
 *   <TestimonialsList />
 *   <TestimonialDetails />
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
	 * @remarks
	 * This state holds the main testimonial data fetched from the API.
	 * It is initialized as an empty array and updated when data is successfully fetched.
	 */
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

	/**
	 * State for tracking the loading status of testimonial data
	 * @type {boolean}
	 * @remarks
	 * Indicates whether a data fetch operation is currently in progress.
	 * Used to show loading indicators in the UI.
	 */
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * State for storing any errors that occur during data fetching
	 * @type {Error | null}
	 * @remarks
	 * Holds any error objects that occur during the fetch operation.
	 * Null when no errors are present.
	 */
	const [error, setError] = useState<Error | null>(null);

	/**
	 * State for storing success/error messages
	 * @type {string | null}
	 * @remarks
	 * Contains user-friendly messages about the current state of data fetching.
	 * Used to display status messages in the UI.
	 */
	const [message, setMessage] = useState<string | null>(null);

	/**
	 * Reference for tracking whether data has been fetched
	 * @type {React.MutableRefObject<boolean>}
	 * @remarks
	 * Used to prevent unnecessary re-fetching of data.
	 * Persists between renders without causing re-renders.
	 */
	const dataFetchedRef = useRef(false);

	/**
	 * Fetches testimonials data from the API endpoint.
	 * This function is memoized using useCallback to maintain referential stability
	 * and prevent unnecessary re-renders.
	 *
	 * @async
	 * @function fetchTestimonials
	 * @returns {Promise<void>} A promise that resolves when the data fetching is complete
	 * @throws {Error} When the API request fails or returns invalid data
	 *
	 * @remarks
	 * The function handles:
	 * - Checking if data is already cached
	 * - Setting loading states
	 * - Making API request with simulated loading
	 * - Validating response data
	 * - Updating state based on response
	 * - Error handling and recovery
	 *
	 * Uses the fetchData utility with the following options:
	 * - simulateLoading: true (for testing/demo purposes)
	 * - loadingTime: 5000ms
	 * - expectsData: true
	 * - cache: force-cache
	 *
	 * @example
	 * ```tsx
	 * // Inside a component or effect
	 * await fetchTestimonials();
	 * ```
	 */
	const fetchTestimonials = useCallback(async () => {
		if (dataFetchedRef.current) return; // Prevent refetch if data exists

		try {
			setIsLoading(true);
			const response = await fetchData<Testimonial[]>(
				"https://win24-assignment.azurewebsites.net/api/testimonials",
				{
					simulateLoading: true,
					loadingTime: 5000,
					expectsData: true,
					cache: "force-cache",
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
				dataFetchedRef.current = true; // Mark data as fetched
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
	 *
	 * @effect
	 * @listens fetchTestimonials
	 *
	 * @remarks
	 * This effect:
	 * - Runs on component mount
	 * - Checks if data has already been fetched using dataFetchedRef
	 * - Calls fetchTestimonials if data hasn't been fetched
	 * - Uses void operator to handle the Promise properly
	 * - Depends only on the memoized fetchTestimonials function
	 */
	useEffect(() => {
		if (!dataFetchedRef.current) {
			void fetchTestimonials();
		}
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
