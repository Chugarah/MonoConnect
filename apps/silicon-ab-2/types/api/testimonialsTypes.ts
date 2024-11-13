import type { apiResponseProp } from "./global";

export interface Testimonial {
	id: string;
	author: string;
	jobRole: string;
	starRating: number;
	avatarUrl: string;
	comment: string;
}

export interface TestimonialsContextProp {
	testimonials: Testimonial[];
	apiResponseProp: apiResponseProp<Testimonial[]>;
	refreshTestimonials: () => Promise<void>;
}
