"use client";
import { useTheme } from "@/app/contexts/theme/hooks/useTheme";

function themeToggleService() {
	const { theme, toggleTheme } = useTheme();

	const themeChange = () => {
		document.documentElement.classList.remove("light", "dark");
		const newTheme = theme === "light" ? "dark" : "light";
		document.documentElement.classList.add(newTheme);
		toggleTheme();
	};

	return {
		theme,
		themeChange,
		isDark: theme === "dark",
	};
}

export default themeToggleService;
