import type { apiResponseProp } from "@/types/api/global";

/**
 * @fileoverview This module provides a utility function to fetch data from an API endpoint using TypeScript generics.
 * It includes optional loading simulation for testing purposes.
 * @module fetchData
 */

/**
 * Fetches data from a specified API endpoint with optional loading simulation.
 * This function is designed to handle various HTTP methods and can simulate loading for testing.
 *
 * @template T - The expected type of the data to be fetched.
 * @param {string} url - The URL endpoint from which to fetch data.
 * @param {Object} [options] - Optional configuration for the fetch request.
 * @param {string} [options.method="GET"] - HTTP method to use for the request. Defaults to "GET".
 * @param {HeadersInit} [options.headers] - Headers to include in the request. Useful for authentication or content-type specifications.
 * @param {BodyInit} [options.body] - Body content for POST, PUT, or DELETE requests. Should be used when sending data to the server.
 * @param {boolean} [options.simulateLoading=false] - If true, simulates a loading delay. Useful for testing loading states in UI.
 * @param {number} [options.loadingTime=0] - Duration of the simulated loading delay in milliseconds. Only applicable if simulateLoading is true.
 * @param {boolean} [options.expectsData=true] - If true, indicates that we expect data from the endpoint. If false, the function will not attempt to parse response data.
 * @returns {Promise<apiResponseProp<T>>} A promise that resolves to an API response object containing the data, error, message, and loading state.
 * @property {T | null} data - The fetched data of type T if successful, null if an error occurred.
 * @property {Error | null} error - An Error object if the fetch failed, null if successful.
 * @property {string} message - A human-readable message indicating success or error.
 * @property {boolean} isLoading - Indicates whether the request is currently in a loading state.
 * @throws {Error} Throws an error if the API response format is invalid or if the HTTP request fails.
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
		method?: "GET" | "POST";
		headers?: HeadersInit;
		body?: BodyInit;
		simulateLoading?: boolean;
		loadingTime?: number;
		expectsData?: boolean;
	},
): Promise<apiResponseProp<T>> {
	try {
		// Simulate loading delay if specified in options
		if (options?.simulateLoading) {
			await new Promise((resolve) =>
				setTimeout(resolve, options.loadingTime || 0),
			);
		}

		// Perform the fetch request with the specified options
		const response = await fetch(url, {
			method: options?.method || "GET",
			headers: options?.headers,
			body: options?.body,
		});

		// Check if the response status is not OK and throw an error if so
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// If no data is expected and the response is successful, return a success message
		if (!options?.expectsData && response.status === 200) {
			return {
				data: {} as T,
				error: null,
				message: "Request successful",
				isLoading: false,
			};
		}

		// Parse the response data as JSON
		const rawData = await response.json();

		// Check if the parsed data is an array and return it if so
		if (Array.isArray(rawData)) {
			return {
				data: rawData as T,
				error: null,
				message: "Data was processed successfully",
				isLoading: false,
			};
		}

		// Check if the parsed data is an object and return it if so
		if (rawData && typeof rawData === "object") {
			return {
				data: rawData as T,
				error: null,
				message: "Data was processed successfully",
				isLoading: false,
			};
		}

		// Throw an error if the response format is invalid
		throw new Error("Invalid API response format");
	} catch (error) {
		// Return an error object if the fetch fails
		return {
			data: null,
			error:
				error instanceof Error ? error : new Error("Failed to process request"),
			message: "Error: Failed to process request",
			isLoading: false,
		};
	}
}
