import type { Config } from "tailwindcss"

const config: Config = {
 content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
 theme: {
  extend: {
   colors: {
    primary: "#ed6355",
    secondary: "#fda94f",
    accent: "#6e5bba",
   },
   fontFamily: {
    "montserrat-regular": "MontserratRegular",
    "montserrat-bold": "MontserratBold",
    "montserrat-bold-italic": "MontserratBoldItalic",
    "clash-display-bold": "ClashDisplayBold",
    "unica-one": "UnicaOne",
   },
  },
 },
 plugins: [],
}
export default config
