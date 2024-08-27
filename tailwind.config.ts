import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#F4F1EB",
        "off-black": "#2C2C2C",
        "off-grey": "#444444",
        disabled: "#777777",
        "sem-yes": "#2FDD54",
        "sem-no": "#F3201D",
        "sem-warn": "#FBED5A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        "roboto-slab": "var(--font-roboto-slab)",
      },
      boxShadow: {
        offset: "2px 2px",
      },
    },
  },
  plugins: [],
};
export default config;
