import type { apiResponseProp } from "./global";

export interface Faq {
	id: string;
	title: string;
	content: string;
}

export interface FaqContextProp {
	faq: Faq[];
	apiResponseProp: apiResponseProp<Faq[]>;
	refreshFaq: () => Promise<void>;
}
