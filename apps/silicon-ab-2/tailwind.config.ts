import type { Config } from "tailwindcss";

// Base Colors
const colors = {
	white: "#ffffff",
	transparent: "rgb(255, 255, 255, 0)",
	grey: {
		100: "#f3f6ff",
		200: "#eff2fc",
		300: "#e2e5f1",
		400: "#d4d7e5",
		500: "#b4b7c9",
		600: "#9397ad",
		700: "#565973",
		750: "#585c7b",
		770: "#3e4265",
		800: "#33354d",
		900: "#0b0f19",
	},
	primary: {
		DEFAULT: "#6366f1",
		purple: "#8b5cf6",
		pink: "#d946ef",
	},
	system: {
		error: "#ef4444",
		success: "#22c55e",
		warning: "#ffba08",
		info: "#4c82f7",
	},
	shadow: {
		primary: "#131022",
		secondary: "#39455a",
	},
};

// Theme Configurations
const lightTheme = {
	"bg-color": colors.white,
	"foreground-color": colors.grey[900],
	"section-color": colors.grey[800],
	navigation: colors.grey[800],
	forms: colors.grey[700],
	"display-headings": colors.grey[900],
	"icon-color": colors.grey[800],
	"icon-bg-color": colors.grey[100],
	"special-text": colors.grey[750],
	cards: {
		DEFAULT: colors.white,
		border: colors.grey[100],
		"border-active": colors.transparent,
		"border-shadow": colors.grey[300],
	},
	form: {
		input: colors.white,
		border: colors.grey[400],
	},
	primary: {
		DEFAULT: colors.primary.DEFAULT,
		foreground: colors.white,
		gradient: `linear-gradient(to left, ${colors.primary.DEFAULT} 0, ${colors.primary.purple} 50%, ${colors.primary.pink} 100%)`,
	},
};

const darkTheme = {
	"bg-color": colors.grey[900],
	"foreground-color": colors.white,
	"section-color": colors.white,
	navigation: colors.white,
	forms: "rgba(255, 255, 255, 0.7)",
	"display-headings": colors.white,
	"icon-color": colors.white,
	"icon-bg-color": "rgba(255, 255, 255, 0.05)",
	"special-text": "rgba(255, 255, 255, 0.6)",
	cards: {
		DEFAULT: "rgba(255, 255, 255, 0.04)",
		border: "rgba(255, 255, 255, 0.15)",
		"border-active": "rgba(255, 255, 255, 0.15)",
		"border-shadow": "rgba(255, 255, 255, 0.65)",
	},
	form: {
		input: "rgba(255, 255, 255, 0.02)",
		border: "rgba(255, 255, 255, 0.15)",
	},
	primary: {
		DEFAULT: colors.primary.DEFAULT,
		foreground: colors.white,
		gradient: `linear-gradient(to left, ${colors.primary.DEFAULT} 0, ${colors.primary.purple} 50%, ${colors.primary.pink} 100%)`,
	},
};

// Shadow Configurations
const shadows = {
	small: `0 0.275em 0.75em -0.0625em ${colors.shadow.primary}0f, 0 0.125em 0.4em -0.0625em ${colors.shadow.primary}08`,
	medium: `0 0.275em 1.25em -0.0625em ${colors.shadow.primary}0d, 0 0.25em 0.5625em -0.0625em ${colors.shadow.primary}08`,
	large: `0 0.3em 1.5em -0.375em ${colors.shadow.primary}1a, 0 0.25em 0.8125em -0.125em ${colors.shadow.primary}0f`,
	primary: `0 0.5em 1.125em -0.5em ${colors.primary.DEFAULT}1a`,
	secondary: `0 0.5em 1.125em -0.5em ${colors.shadow.primary}26`,
};

const spacing = {
	// Base spacing scale
	"2xs": "0.25rem", // 4px
	xs: "0.5rem", // 8px
	sm: "1rem", // 16px
	md: "1.5rem", // 24px
	lg: "2rem", // 32px
	xl: "3rem", // 48px
	"2xl": "4rem", // 64px
	"3xl": "6rem", // 96px
	"4xl": "8rem", // 128px
	"5xl": "10rem", // 160px
	"6xl": "12rem", // 192px

	// Pixel-specific values
	"2": "0.125rem", // 2px
	"4": "0.25rem", // 4px
	"9": "0.5625rem", // 9px
	"10": "0.625rem", // 10px
	"12": "0.75rem", // 12px
	"14": "0.875rem", // 14px
	"17": "1.0625rem", // 17px
	"18": "1.125rem", //18px
	"20": "1.25rem", // 20px
	"22": "1.375rem", // 22px
	"28": "1.75rem", // 28px
	"30": "1.875rem", // 30px
	"35": "2.1875rem", // 35px
	"36": "2.25rem", // 36px
	"38": "2.375rem", // 38px
	"40": "2.5rem", // 40px
	"42": "2.625rem", // 42px
	"43": "2.6875rem", // 43px
	"44": "2.75rem", // 44px
	"46": "2.875rem", // 46px
	"48": "3rem", // 48px
	"50": "3.125rem", // 50px
	"52": "3.25rem", // 52px
	"55": "3.4375rem", // 55px
	"56": "3.5rem", // 56px
	"63": "3.9375rem", // 63px
	"73": "4.5625rem", // 73px
	"75": "4.6875rem", // 75px
	"80": "5rem", // 80px
	"90": "5.625rem", // 90px
	"100": "6.25rem", // 100px
	"110": "6.875rem", // 110px
	"130": "8.125rem", // 130px
	"133": "8.3125rem", // 133px
	"148": "9.25rem", // 148px
	"150": "9.375rem", // 150px
	"416": "26rem", // 416px
	"510": "31.875rem;", // 510px

	// Spacing base values
	"sb-0-18": "0.1875rem", // 3px
	"sb-0-62": "0.625rem", // 10px
	"sb-1-1": "1rem", // 16px
	"sb-1-25": "1.25rem", // 20px
	"sb-1-50": "1.5rem", // 24px
	"sb-1-87": "1.875rem", // 30px
	"sb-2-18": "2.1875rem", // 35px
	"sb-2-37": "2.375rem", // 38px
	"sb-2-50": "2.5rem", // 40px
	"sb-3-00": "3rem", // 48px
	"sb-3-31": "3.125rem", // 50px
	"sb-5-00": "5rem", // 80px

	// Size
	mobile: "24.375rem",
	small: "31.25rem",
	medium: "48rem",
	xlarge: "75rem",
	"xlarge-1": "81.1875rem",
	"xlarge-2": "83.75rem",
	"xlarge-3": "88.75rem",
};

const config: Config = {
	darkMode: ["class"],
	lightMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,scss}",
		"./components/**/*.{js,ts,jsx,tsx,scss}",
		"./app/**/*.{ts,tsx}",
		"./@/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				secondary: "0 1px 4px 0 rgba(57, 69, 90, 0.3)",
			},
			containers: {
				mobile: "24.375rem",
				small: "31.25rem", // 500px
				medium: "48rem",
				xlarge: "75rem",
				"xlarge-1": "81.1875rem", /// 1 299px
				"xlarge-2": "83.75rem",
				"xlarge-3": "88.75rem",
			},
			animation: {
				"spin-reverse": "spin 1s linear infinite reverse",
			},
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
			},
			fontWeight: {
				ExtraLight: "200",
				Light: "300",
				Regular: "400",
				Medium: "500",
				SemiBold: "600",
				Bold: "700",
				ExtraBold: "800",
				ExtremeBold: "900",
			},
			fontSize: {
				// Text sizes
				"t-xs": "0.75rem",
				"t-s": "0.875rem",
				"t-m": "1rem",
				"t-l": "1.125rem",
				"t-xl": "125rem",
				"t-lt": "1.5rem",

				// Display headings
				"d-1": "5rem",
				"d-2": "4.5rem",
				"d-3": "4rem",
				"d-4": "3.5rem",
				"d-5": "3rem",
				"d-6": "2.625em",
				"d-7": "2.76875em",
				"d-8": "2.13125em",

				// Headings
				"h-1": "2.5rem",
				"h-2": "2rem",
				"h-3": "1.75rem",
				"h-4": "1.5rem",
				"h-5": "1.25rem",
				"h-6": "1rem",
			},
			colors: {
				...colors,
				system: colors.system,
				shadow: colors.shadow,
				primary: {
					DEFAULT: colors.primary.DEFAULT,
					foreground: colors.white,
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				theme: {
					light: lightTheme,
					dark: darkTheme,
				},
				boxShadow: shadows,
			},
			borderRadius: {
				lg: "0.5rem", // 8px
				md: "0.375rem", // 6px
				sm: "0.25rem", // 4px
				DEFAULT: "0.3125rem", // 5px
			},
			spacing: spacing,
			maxWidth: {
				desktop: "81.25rem", // 1300px
				tablet: "48rem", // 768px
				mobile: "24.375rem", // 390px
				"1/4": "25%",
				"2/4": "50%",
				"3/4": "75%",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwind-container-queries-2d"),
	],
};
export default config;
