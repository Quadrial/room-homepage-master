/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hdesktop: "url('images/desktop-image-hero-3.jpg')",
        Hmobile: "url('images/mobile-image-hero-1.jpg')",
        Htablet: "url('images/desktop-image-hero-3.jpg')",
      }
    },
  },
  plugins: [],
};
