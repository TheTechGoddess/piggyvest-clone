import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#062863",
        black: "#000000",
        blue: "#0D60D8",
        purple: "#7A15E5",
        white: "#FFFFFF",
        bodytext: "#424A57",
        green: "#11A468",
        grey: "#C3D8F5",
      },
    },
  },
  plugins: [],
};
export default config;
