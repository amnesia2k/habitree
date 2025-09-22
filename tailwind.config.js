/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        "montserrat-light": ["MontserratLight"],
        "montserrat-medium": ["MontserratMedium"],
        "montserrat-semibold": ["MontserratSemiBold"],
        "montserrat-bold": ["MontserratBold"],
      },

      colors: {
        primary: {
          100: "#3BA935",
          200: "#10B981",
        },
        muted: "#686873",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
