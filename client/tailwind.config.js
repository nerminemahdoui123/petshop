module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary pink color (adjust to your preference)
        primary: "#F7CAC9", // Light pink
        // Secondary pink color (adjust to your preference)
        secondary: {
          100: "#FCE4EC", // Lighter pink
          200: "#F7CAC9", // Primary pink
          300: "#E0AEC4", // Darker pink
        },
      },
      textColor: {
        // Text color to contrast with pink background (optional)
        primary: "#333333", // Dark gray
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};

