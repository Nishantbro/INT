/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Light Minimal Theme */
        bgMain: "#ffffff",
        bgSidebar: "#ffffff",
        bgSecondary: "#f9f9f9",
        bgCard: "#ffffff",
        textPrimary: "#0d0d0d",
        textSecondary: "#666666",
        textMuted: "#999999",
        textPlaceholder: "#cccccc",
        accentPrimary: "#0d0d0d",
        accentHover: "#333333",
        accentLight: "#f9f9f9",
        borderColor: "#ececec",
        dividerColor: "#f0f0f0",
        buttonPrimary: "#0d0d0d",
        buttonHover: "#333333",
        buttonText: "#ffffff",
        buttonSecondary: "#f9f9f9",
        inputBg: "#ffffff",
        inputBorder: "#ececec",
        inputText: "#0d0d0d",
        statusSuccess: "#10B981",
        statusError: "#EF4444",
        statusWarning: "#F59E0B",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}