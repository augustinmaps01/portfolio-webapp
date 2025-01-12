import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Arrows"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      ...colors,
      primary: "#1a1a1a",
      secondary: colors.gray,
      // Optional: Define any other custom colors or palettes.
    },
  },
  plugins: [],
} satisfies Config;
