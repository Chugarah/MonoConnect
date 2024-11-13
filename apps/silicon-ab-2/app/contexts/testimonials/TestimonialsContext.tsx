"use client";
import type { TestimonialsContextProp } from "@/types/api/testimonialsTypes";
import { createContext } from "react";

export const TestimonialsContext = createContext<
	TestimonialsContextProp | undefined
>(undefined);
