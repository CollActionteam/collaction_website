module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // only used in index page
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "7rem",
        lg: "16rem",
      },
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#F9F9F9",
        white: {
          DEFAULT: "#F9F9F9",
        },
        black: {
          0: "#EFEFEF",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          DEFAULT: "#000000",
        },
        accent: {
          100: "#D2F3EB",
          200: "#A5E8D8",
          300: "#92E3D0",
          400: "#4AD1B1",
          500: "#2EB494",
          DEFAULT: "#2EB494",
        },
        // update the index page styles and can remove
        collaction: {
          light: "#2EB494",
          DEFAULT: "#2EB494",
          dark: "#2EB494",
        },
      },
      boxShadow: {
        DEFAULT: "0px 5px 50px 0px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: "Rubik, sans-serif",
      },
      fontSize: {
        button: ["15px", "20px"],
        body: ["17px", "26px"],
        "title-sm": ["28px", "34px"],
        "title-lg": ["40px", "41px"],
      },
      width: {
        208: "52rem",
      },
      maxWidth: {
        400: "400px",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
