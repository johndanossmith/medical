/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'medical':"url('assets/medical.jpg')",
        'chatting':"url('assets/chat.png')",
      },
      colors:{
        'medical':"#5ED943",
        'navbar':"#FFFFFF",
        'nav':"#00697F",
      },
    },
  },
  plugins: [require("daisyui")],
}

