import type { apiResponseProp } from "@/types/api/global";

/**
 * @fileoverview Helper function for fetching data with TypeScript generics and optional loading simulation
 * @module fetchData
 */

/**
 * Generic function to fetch data from an API endpoint with optional loading simulation
 *
 * @template T - The expected type of the data to be fetched
 * @param {string} url - The URL endpoint to fetch data from
 * @param {Object} [options] - Optional configuration object for the fetch request
 * @param {boolean} [options.simulateLoading] - Flag to enable simulated loading delay
 * @param {number} [options.loadingTime] - Duration of simulated loading in milliseconds
 * @returns {Promise<apiResponseProp<T>>} A promise that resolves to an API response object
 * @property {T | null} data - The fetched data of type T if successful, null if error
 * @property {Error | null} error - Error object if fetch failed, null if successful
 * @property {string} message - Human readable success/error message
 * @property {boolean} isLoading - Indicates if request is in loading state
 * @throws {Error} When API response format is invalid
 * @throws {Error} When HTTP request fails
 *
 * @example
 * // Basic usage - fetching user data
 * interface UserData {
 *   id: number;
 *   name: string;
 * }
 *
 * const result = await fetchData<UserData>('https://api.example.com/users');
 * if (result.data) {
 *   console.log(result.data.name);
 * }
 *
 * @example
 * // With simulated loading delay
 * const result = await fetchData<UserData>('https://api.example.com/users', {
 *   simulateLoading: true,
 *   loadingTime: 2000 // 2 second delay
 * });
 */
export async function fetchData<T>(
	url: string,
	options?: {
		simulateLoading?: boolean;
		loadingTime?: number;
	},
): Promise<apiResponseProp<T>> {
	try {
		// Simulate loading delay if requested
		if (options?.simulateLoading) {
			await new Promise((resolve) =>
				setTimeout(resolve, options.loadingTime || 0),
			);
		}

		// Fetch data from provided URL
		const response = await fetch(url);

		// If the response is not 200 (ok) we throw an Error
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Safely parse JSON with type assertion
		const rawData = (await response.json()) as unknown;

		// Validate response format
		if (rawData === null || typeof rawData !== "object") {
			throw new Error("Invalid API response format");
		}

		// Type assertion after validation
		const data = rawData as T;

		return {
			data,
			error: null,
			message: "Data was fetched successfully",
			isLoading: false,
		};
	} catch (error) {
		return {
			data: null,
			error: error instanceof Error ? error : new Error("Failed to fetch data"),
			message: "Error: Failed to load data",
			isLoading: false,
		};
	}
}
