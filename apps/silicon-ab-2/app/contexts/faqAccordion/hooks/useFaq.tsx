import { FaqContext } from "@/app/contexts/faqAccordion/FaqContext";
import { useContext } from "react";

/**
 * Custom hook for accessing FAQ context
 *
 * @hook
 * @description A custom React hook that provides access to the FAQ context values.
 * This hook must be used within a FaqProvider component to work properly.
 *
 * The hook performs a context check and throws an error if used outside of
 * the FaqProvider context.
 *
 * @throws {Error} When used outside of FaqProvider context
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const faqContext = useFaq();
 *   // Use faq context values
 * }
 * ```
 *
 * @returns {FaqContextType} The FAQ context object containing FAQ-related state and functions
 */
export function useFaq() {
	const faqContext = useContext(FaqContext);

	if (!faqContext) {
		throw new Error("useContext needs to be used within FaqProvider");
	}
	return faqContext;
}
