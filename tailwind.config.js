/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          primary: "var(--color-bg)",
          secondary: "var(--color-surface)",
          card: "var(--color-card)",
        },
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          primary: "var(--color-accent)",
          secondary: "var(--color-accent-2)",
        },
        amber: "var(--color-amber)",
      },
      fontFamily: {
        sans: ['"Geist"', 'sans-serif'],
        display: ['"Geist"', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
        hover: '0 10px 30px rgba(19,255,170,0.08), 0 4px 12px rgba(0,0,0,0.3)',
        focus: '0 0 0 3px rgba(19,255,170,0.25)',
      },
    },
  },
  plugins: [],
}