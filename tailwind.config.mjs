/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        siteGreen: "#4CAF47",
        siteBG:'#F5F7FA',
        Sitetext: '#4D4D4D',
        FooterBG:'#263238'
      },
    },
  },
  plugins: [],
};
