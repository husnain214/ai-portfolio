/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1": "var(--gradient-1)",
        "gradient-2": "var(--gradient-2)",
        "gradient-3": "var(--gradient-3)",
        "gradient-4": "var(--gradient-4)",
      },
      colors: {
        primary: "var(--clr-theme-primary)",
        secondary: "var(--clr-theme-secondary)",
        "accent-1": "var(--clr-theme-accent-1)",
        "accent-2": "var(--clr-theme-accent-2)",
        dark: "var(--clr-dark)",
      },
      fontFamily: {
        sora: ["var(--ff-sora)"],
        russo: ["var(--ff-russo)"],
      },
    },
  },
  plugins: [],
};

