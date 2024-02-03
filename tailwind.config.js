/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor:"#050913"
      },
      backgroundImage: {
        site : "url('/src/images/bg.png')",
        about : "url('/src/images/about.png')",
        services : "url('/src/images/services.png')",
      }
    },
      fontFamily: {
        primary: "Poppins",
        secondary: "Roboto",
      },
      container: {
        padding: {
          DEFAULT: "15px",
        }
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },   
  },
  plugins: [],
}
