import Link from "next/link";

export default function Custom500() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-5">
			<div className="w-full max-w-md space-y-6 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
						500
					</h1>
					<h2 className="mt-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
						Internal Server Error
					</h2>
					<p className="mt-2 text-gray-600 dark:text-gray-400">
						Sorry, something went wrong on our end. Please try again later.
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<button
						type="button"
						onClick={() => window.location.reload()}
						className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
					>
						Try Again
					</button>
					<Link
						href="/"
						className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 font-semibold rounded-lg text-center"
					>
						Return Home
					</Link>
				</div>
			</div>
		</main>
	);
}
