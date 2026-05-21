import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFBF5",
            foreground: "#1A1A1A",
            primary: { DEFAULT: "#F97316", foreground: "#ffffff" },
            secondary: { DEFAULT: "#0EA5E9", foreground: "#ffffff" },
          },
        },
        dark: {
          colors: {
            background: "#0B0B12",
            foreground: "#F5F5F7",
            primary: { DEFAULT: "#FB923C", foreground: "#0B0B12" },
            secondary: { DEFAULT: "#22D3EE", foreground: "#0B0B12" },
          },
        },
        ocean: {
          extend: "dark",
          colors: {
            background: "#0A192F",
            foreground: "#E6F1FF",
            primary: { DEFAULT: "#64FFDA", foreground: "#0A192F" },
            secondary: { DEFAULT: "#7CC4FF", foreground: "#0A192F" },
          },
        },
        sunset: {
          extend: "light",
          colors: {
            background: "#FFF4EC",
            foreground: "#3D1F1B",
            primary: { DEFAULT: "#FF5E5B", foreground: "#ffffff" },
            secondary: { DEFAULT: "#FFB400", foreground: "#3D1F1B" },
          },
        },
        forest: {
          extend: "dark",
          colors: {
            background: "#0F1F17",
            foreground: "#E8F5E9",
            primary: { DEFAULT: "#34D399", foreground: "#0F1F17" },
            secondary: { DEFAULT: "#FBBF24", foreground: "#0F1F17" },
          },
        },
      },
    }),
  ],
};
