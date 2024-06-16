import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f", // You can adjust this color as needed
      },
      boxShadow: {
        neon: "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f",
      },
    },
  },
  plugins: [require("daisyui")],
};
