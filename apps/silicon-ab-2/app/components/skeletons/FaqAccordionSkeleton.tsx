import { Skeleton } from "@/components/ui/Skeleton";

function FaqAccordionSkeleton() {
	// Create an array of unique identifiers for skeleton items
	const skeletonIds = [
		"faq-sk-1",
		"faq-sk-2",
		"faq-sk-3",
		"faq-sk-4",
		"faq-sk-5",
	];

	return (
		<div className="faq__faq-accordion">
			{skeletonIds.map((id) => (
				<div key={id} className="faq__faq-accordion__container">
					<div className="faq__faq-accordion__container__title">
						<Skeleton className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700" />
						<Skeleton className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700" />
					</div>
					<div className="faq__faq-accordion__container__content">
						<Skeleton className="h-20 w-full bg-slate-200 dark:bg-slate-700" />
					</div>
				</div>
			))}
		</div>
	);
}

export default FaqAccordionSkeleton;
