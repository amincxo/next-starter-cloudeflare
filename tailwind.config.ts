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
        'brand-dark': '#1a202c', // یک رنگ پایه تیره
        'brand-blue': '#3b82f6', // آبی اصلی
        'brand-purple': '#8b5cf6', // بنفش اصلی
        'brand-light': '#f1f5f9', // برای متون روشن روی پس زمینه تیره
        'brand-accent': '#a78bfa', // یک بنفش روشن تر برای تاکید
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        vazir: ['Vazir', 'Arial', 'Helvetica', 'sans-serif']
      }
      
    },
  },
  plugins: [],
};
export default config;
