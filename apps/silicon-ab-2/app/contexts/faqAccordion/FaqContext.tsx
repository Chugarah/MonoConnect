"use client";
import type { FaqContextProp } from "@/types/api/faqTypes";
import { createContext } from "react";

/**
 * FAQ Context
 *
 * @context
 * @description A React context for managing FAQ (Frequently Asked Questions) data and state.
 * This context provides FAQ data and related state management functionality to components
 * within its provider tree. It is used in conjunction with FaqProvider to handle FAQ data,
 * loading states, error handling, and data refresh capabilities.
 *
 * The context includes:
 * - FAQ data array
 * - Loading state
 * - Error handling
 * - Status messages
 * - Data refresh functionality
 *
 * @type {React.Context<FaqContextProp | undefined>}
 * @default undefined
 *
 * @example
 * ```tsx
 * // Using the context in a component
 * const faqContext = useContext(FaqContext);
 * if (faqContext) {
 *   const { faq, isLoading, error } = faqContext;
 *   // Use the FAQ data and state
 * }
 * ```
 */
export const FaqContext = createContext<FaqContextProp | undefined>(undefined);
