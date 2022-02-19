module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Manrope": ["Manrope"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

   //configuring dasyUI
   daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
  },

}
