"use client";
import { createContext } from "react";
import type { ThemeContextType } from "@/types/theme/themeTypes";

/**
 * React Context for managing theme state across the application
 *
 * @description This context provides theme-related functionality throughout the component tree.
 * It stores the current theme state ("light" or "dark") and provides a method to toggle between themes.
 * The context must be accessed using the useTheme hook within components wrapped by a ThemeProvider.
 *
 * @example
 * ```tsx
 * // Using ThemeContext with Provider
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * @constant {React.Context<ThemeContextType | undefined>}
 * @default undefined
 *
 * @see {@link ThemeContextType} For the type definition of the context value
 * @see {@link useTheme} For the hook to consume this context
 * @see {@link ThemeProvider} For the provider component that wraps the application
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);
