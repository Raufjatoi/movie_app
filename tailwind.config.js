/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your components
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
  primary: '#0A84FF',   // Apple’s system blue
  secondary: '#1C1C1E', // Dark gray (like iOS background)

  light: {
    100: '#F2F2F7',  // Light background (system grouped background)
    200: '#E5E5EA',  // Secondary system fill
    300: '#D1D1D6',  // Tertiary system fill
  },

  dark: {
    100: '#2C2C2E',  // Dark background
    200: '#1C1C1E',  // Even darker shade (system background)
  },

  accent: '#FF9500', // Apple’s orange accent
}

    },
  },
  plugins: [],
}
