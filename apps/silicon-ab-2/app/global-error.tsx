"use client";

import { useEffect } from "react";

/**
 * Global Error Boundary Component
 *
 * @description This component serves as the top-level error boundary for the entire application.
 * It catches and handles any unhandled errors that occur during rendering or in event handlers.
 * The component provides a user-friendly error interface with options to retry or return home.
 *
 * Features:
 * - Displays a visually appealing error message with icon
 * - Shows error digest ID when available for debugging
 * - Provides "Try Again" and "Return Home" actions
 * - Logs errors to console (can be extended to error reporting service)
 * - Fully responsive design with Tailwind CSS
 *
 * @example
 * ```tsx
 * // This component is automatically used by Next.js when an error occurs
 * // No manual implementation required
 * ```
 *
 * @param {Object} props - Component props
 * @param {Error & { digest?: string }} props.error - The error object that was caught
 * @param {Function} props.reset - Function to reset the error boundary and retry rendering
 *
 * @returns {React.ReactElement} A full-page error UI with recovery options
 */
export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<html lang="en">
			<body className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
				<main className="flex flex-col items-center justify-center min-h-screen p-5">
					<div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
						{/* Error Icon */}
						<div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
							<svg
								className="w-8 h-8 text-red-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-labelledby="errorIconTitle"
								role="img"
							>
								<title id="errorIconTitle">Error Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</div>

						{/* Error Content */}
						<div className="text-center space-y-3">
							<h1 className="text-2xl font-bold text-gray-900">
								Something went wrong!
							</h1>
							<p className="text-gray-600">
								We apologize for the inconvenience. Please try again later.
							</p>
							{error.digest && (
								<p className="text-sm text-gray-500">
									Error ID: {error.digest}
								</p>
							)}
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col gap-3">
							<button
								type="button"
								onClick={() => reset()}
								className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Try Again
							</button>
							<a
								href="/"
								className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg text-center transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>
								Return Home
							</a>
						</div>
					</div>

					{/* Footer */}
					<footer className="mt-8 text-center text-gray-500 text-sm">
						© {new Date().getFullYear()} Your Company. All rights reserved.
					</footer>
				</main>
			</body>
		</html>
	);
}
