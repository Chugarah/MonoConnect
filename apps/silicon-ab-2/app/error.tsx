"use client";

import { useEffect } from "react";

/**
 * Error Boundary Component for handling and displaying runtime errors in Next.js applications
 *
 * @description This component serves as a fallback UI when runtime errors occur in the application.
 * It provides error logging functionality and a retry mechanism to recover from errors.
 * The component is automatically used by Next.js when an error occurs in the component tree.
 */
export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5">
			<div className="w-full max-w-md space-y-6 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
						Error
					</h1>
					<h2 className="mt-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
						Something went wrong!
					</h2>
					<p className="mt-2 text-gray-600 dark:text-gray-400 break-words overflow-auto max-h-full">
						{error.message || "An unexpected error occurred."}
					</p>
					{error.digest && (
						<p className="mt-2 text-sm text-gray-500 dark:text-gray-400 break-words">
							Error ID: {error.digest}
						</p>
					)}
				</div>
				<div className="flex flex-col gap-3">
					<button
						type="button"
						onClick={() => reset()}
						className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
					>
						Try Again
					</button>
				</div>
			</div>
		</main>
	);
}
