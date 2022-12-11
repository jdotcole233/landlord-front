/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingBanner': "url('assets/images/banner-1.jpg')",
        'profilePicture': "url('assets/images/avatar.png')",
        // 'defaultApartment': "url('https://cdn.pixabay.com/photo/2019/04/29/20/41/amsterdam-4167026_960_720.png')"
      },
      fontFamily: {
        robotoExtraLight: "Robot@100",
        robotLight: "Robot@300",
        robotoSemiBold: "Robot@400",
        robotoBold: "Robot@500",
        robotoExtraBold: "Robot@700",
      }
    },
  },
  plugins: [],
}
