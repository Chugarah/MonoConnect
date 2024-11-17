"use client";
import { fetchData } from "@/app/api/fetchData";
import { FaqContext } from "@/app/contexts/faqAccordion/FaqContext";
import type { Faq } from "@/types/api/faqTypes";
import { useState, useEffect, useCallback, useRef } from "react";

/**
 * FAQ Provider Component that manages FAQ data state and provides it through context.
 * This component fetches FAQ data from an API and maintains the state of FAQs,
 * loading status, errors, and success/failure messages.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components that will have access to the FAQ context
 * @returns {JSX.Element} A context provider component wrapping the children
 *
 * @remarks
 * This provider component handles:
 * - Fetching FAQ data from API
 * - Managing loading states
 * - Error handling and messaging
 * - Caching fetched data
 * - Providing data through context
 *
 * The component uses React hooks for state management and data fetching:
 * - useState for managing FAQs and UI states
 * - useCallback for memoizing the fetch function
 * - useRef for tracking if data has been fetched
 * - useEffect for triggering initial data fetch
 *
 * @example
 * ```tsx
 * <FaqProvider>
 *   <FaqList />
 *   <FaqDetails />
 * </FaqProvider>
 * ```
 */
export function FaqProvider({ children }: { children: React.ReactNode }) {
	/**
	 * State for storing the array of FAQs
	 * @type {Array<Faq>}
	 * @remarks
	 * This state holds the main FAQ data fetched from the API.
	 * It is initialized as an empty array and updated when data is successfully fetched.
	 */
	const [faq, setFaq] = useState<Faq[]>([]);

	/**
	 * State for tracking the loading status of FAQ data
	 * @type {boolean}
	 * @remarks
	 * Indicates whether a data fetch operation is currently in progress.
	 * Used to show loading indicators in the UI.
	 */
	const [isLoading, setIsLoading] = useState(true);

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
	 * Fetches FAQ data from the API endpoint.
	 * This function is memoized using useCallback to maintain referential stability
	 * and prevent unnecessary re-renders.
	 *
	 * @async
	 * @function fetchFaqData
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
	 * await fetchFaqData();
	 * ```
	 */
	const fetchFaqData = useCallback(async () => {
		if (dataFetchedRef.current) return;

		try {
			setIsLoading(true);
			const response = await fetchData<Faq[]>(
				"https://win24-assignment.azurewebsites.net/api/faq",
				{
					simulateLoading: true,
					loadingTime: 5000,
					expectsData: true,
					cache: "force-cache",
				},
			);

			if (response.error) {
				setError(response.error);
				setMessage(response.message || "Failed to load FAQ data");
				setFaq([]);
			} else if (Array.isArray(response.data)) {
				setFaq(response.data);
				setError(null);
				setMessage(response.message || "Data Loaded :)");
				dataFetchedRef.current = true;
			} else {
				throw new Error("Invalid FAQ data format");
			}
		} catch (error) {
			setError(
				error instanceof Error ? error : new Error("Failed to fetch FAQ Data"),
			);
			setMessage("Failed to Load FAQ Data");
			setFaq([]);
		} finally {
			setIsLoading(false);
		}
	}, []);

	/**
	 * Effect hook that triggers FAQ data fetching when the component mounts.
	 *
	 * @effect
	 * @listens fetchFaqData
	 *
	 * @remarks
	 * This effect:
	 * - Runs on component mount
	 * - Checks if data has already been fetched using dataFetchedRef
	 * - Calls fetchFaqData if data hasn't been fetched
	 * - Uses void operator to handle the Promise properly
	 * - Depends only on the memoized fetchFaqData function
	 */
	useEffect(() => {
		if (!dataFetchedRef.current) {
			void fetchFaqData();
		}
	}, [fetchFaqData]);

	return (
		<FaqContext.Provider
			value={{
				faq,
				apiResponseProp: { isLoading, error, message },
				refreshFaq: fetchFaqData,
			}}
		>
			{children}
		</FaqContext.Provider>
	);
}
