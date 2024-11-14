"use client";
import { fetchData } from "@/app/api/fetchData";
import { FaqContext } from "@/app/contexts/faqAccordion/FaqContext";
import type { Faq } from "@/types/api/faqTypes";
import { useState, useEffect, useCallback } from "react";

/**
 * FAQ Provider Component
 *
 * @component
 * @description A context provider component that manages FAQ data state and fetching.
 * This component provides FAQ data and related state (loading, error, messages) to its children
 * through the FaqContext. It handles data fetching, error handling, and state management for FAQs.
 *
 * The component uses:
 * - Client-side rendering ("use client" directive)
 * - React hooks for state management
 * - Async data fetching with error handling
 * - Context API for state distribution
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the FAQ context
 *
 * @example
 * ```jsx
 * <FaqProvider>
 *   <FaqComponent />
 * </FaqProvider>
 * ```
 */
export function FaqProvider({ children }: { children: React.ReactNode }) {
	const [faq, setFaq] = useState<Faq[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [message, setMessage] = useState<string | null>(null);

	/**
	 * Fetches FAQ data from the API endpoint.
	 * This function is memoized using useCallback to prevent unnecessary re-renders.
	 *
	 * The function handles:
	 * - Loading state management
	 * - Error handling and messages
	 * - Data processing and storage
	 *
	 * @async
	 * @function
	 * @returns {Promise<void>}
	 *
	 * @throws {Error} When the API request fails
	 *
	 * @example
	 * ```tsx
	 * await fetchFaqData();
	 * ```
	 */
	const fetchFaqData = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await fetchData<Faq[]>(
				"https://win24-assignment.azurewebsites.net/api/faq",
				{
					simulateLoading: true,
					loadingTime: 5000,
				},
			);

			if (response.error) {
				setError(response.error);
				setMessage(response.message || "Failed to load Testimonial data");
			} else {
				setFaq(response.data || []);
				setMessage(response.message || "Data Loaded :)");
			}
		} catch (error) {
			setError(
				error instanceof Error ? error : new Error("Failed to fetch FAQ Data"),
			);
			setMessage("Failed to Load FAQ Data");
		} finally {
			setIsLoading(false);
			setMessage("FAQ Loaded Complexly");
		}
	}, []);

	/**
	 * Effect hook that triggers FAQ data fetching when the component mounts.
	 * Uses an async function wrapper to properly handle promises and errors.
	 *
	 * @effect
	 * @listens fetchFaqData
	 */
	useEffect(() => {
		const initializeFaq = async () => {
			try {
				await fetchFaqData();
			} catch (error) {
				setError(
					error instanceof Error
						? error
						: new Error("Failed to activate fetchFaqData"),
				);
			}
		};
		void initializeFaq();
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
