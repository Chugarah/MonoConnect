/**
 * Loading component that displays a fullscreen loading spinner with backdrop
 *
 * @component
 * @description
 * Renders a centered loading spinner with a semi-transparent backdrop.
 * The spinner consists of two rings - a static outer ring and an animated inner ring.
 * Below the spinner is loading text that is announced to screen readers.
 *
 * @example
 * // The component is automatically used by Next.js during page transitions
 * <Loading />
 *
 * @returns {JSX.Element} Loading spinner with backdrop and text
 */
export default function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-[9999]">
			<div className="flex flex-col items-center gap-4">
				{/* Spinner container */}
				<div className="relative w-16 h-16">
					{/* Static outer ring for visual contrast */}
					<div className="absolute inset-0 rounded-full border-4 border-slate-200" />
					{/* Animated inner ring that creates spinning effect */}
					<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
				</div>

				{/* Loading text with ARIA live region for accessibility */}
				<span className="text-sm font-medium text-slate-600" aria-live="polite">
					Loading...
				</span>
			</div>
		</div>
	);
}
