export interface apiResponseProp<T> {
	isLoading: boolean;
	error: Error | null;
	message?: string | null;
	data?: T | null;
}
