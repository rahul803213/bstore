import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints
        'sm': '480px',      // Small screens and above (e.g., mobile)
        'md': '768px',      // Medium screens and above (e.g., tablets)
        'lg': '1024px',     // Large screens and above (e.g., laptops)
        'xl': '1280px',     // Extra large screens and above (e.g., desktops)
        '2xl': '1536px',    // 2x Extra large screens and above
      },
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        headertextcolor:"var(--headercolor)"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
