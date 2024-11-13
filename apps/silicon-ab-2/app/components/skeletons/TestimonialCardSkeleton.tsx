import { Skeleton } from "@/components/ui/Skeleton";

/**
 * TestimonialCardSkeleton Component
 *
 * @description A loading skeleton component that mimics the structure of a testimonial card.
 * Provides visual feedback while the actual testimonial content is being loaded.
 *
 * Features:
 * - Quote icon placeholder
 * - 5-star rating skeleton
 * - Comment text area placeholder
 * - User avatar and details placeholder
 *
 * Layout matches the actual TestimonialCards component structure for smooth transitions.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TestimonialCardSkeleton />
 *
 * // Multiple skeletons
 * <div>
 *   {Array(3).fill(0).map((_, i) => (
 *     <TestimonialCardSkeleton key={i} />
 *   ))}
 * </div>
 * ```
 *
 * @returns {JSX.Element} A skeleton loader UI for testimonial cards
 */
function TestimonialCardSkeleton() {
	// Create an array of unique identifiers for stars
	// This solves to use index as id in key property
	const starIds = ["star-1", "star-2", "star-3", "star-4", "star-5"];

	return (
		<div className="clients-app__client-test-card w-full">
			<Skeleton className="max-h-[21.875em] h-416 w-full">
				{/* Quote Icon */}
				<Skeleton className="w-8 h-8 bg-slate-200 dark:bg-slate-700" />

				{/* Stars */}
				<div className="mt-4">
					<div className="flex gap-1">
						{starIds.map((id) => (
							<Skeleton
								key={id}
								className="w-12 h-12 bg-slate-200 dark:bg-slate-700"
							/>
						))}
					</div>
				</div>

				{/* Comment text */}
				<Skeleton className=" h-[50%] max-h-[21.875em] w-full mt-4 bg-slate-200 dark:bg-slate-700" />

				{/* Avatar and user info */}
				<div className="flex items-center gap-4 mt-4">
					<Skeleton className="w-48 h-48 rounded-full bg-slate-200 dark:bg-slate-700" />
					<div className="space-y-2">
						<Skeleton className="h-14 w-150 bg-slate-200 dark:bg-slate-700" />
						<Skeleton className="h-14 w-150 bg-slate-200 dark:bg-slate-700" />
					</div>
				</div>
			</Skeleton>
		</div>
	);
}

export default TestimonialCardSkeleton;
