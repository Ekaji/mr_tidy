/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about_desktop': "url('/https://res.cloudinary.com/tacafrica/image/upload/v1679561443/mr_tidy/Mr_Tidy_Web_Banner_wiinkp.jpg')",
      }
    },
  },
  plugins: [],
}