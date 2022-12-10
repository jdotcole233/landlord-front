/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingBanner': "url('assets/images/banner-1.jpg')",
        'profilePicture': "url('assets/images/avatar.png')"
      }
    },
  },
  plugins: [],
}
