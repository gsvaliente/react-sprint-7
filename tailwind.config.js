import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceSans: ["Space Grotesk", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["black"],
  },
};
