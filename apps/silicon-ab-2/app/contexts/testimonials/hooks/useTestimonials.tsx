import { useContext } from "react";
import { TestimonialsContext } from "@contexts/testimonials/TestimonialsContext";

// Here we are using an common React pattern where we use our Context safely
export function useTestimonials() {
	const context = useContext(TestimonialsContext);

	if (!context) {
		throw new Error(
			"useTestimonials needs to used within TestimonialsProvider",
		);
	}
	return context;
}
