export default function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-[9999]">
			<div className="flex flex-col items-center gap-4">
				{/* Spinner */}
				<div className="relative w-16 h-16">
					{/* Outer ring */}
					<div className="absolute inset-0 rounded-full border-4 border-slate-200" />
					{/* Spinning ring */}
					<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
				</div>

				{/* Loading text */}
				<span className="text-sm font-medium text-slate-600" aria-live="polite">
					Loading...
				</span>
			</div>
		</div>
	);
}
