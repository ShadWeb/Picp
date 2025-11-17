/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        "background-light": "#f5f3ff",
        "background-dark": "#161521",
        "text-light": "#111827",
        "text-dark": "#f3f4f6",
        "border-light": "#e0e7ff",
        "border-dark": "#312e81",
        "surface-light": "#ffffff",
        "surface-dark": "#201f30",
        "muted-light": "#6b7280",
        "muted-dark": "#9ca3af",
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
