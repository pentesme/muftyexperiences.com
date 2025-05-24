/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // tailwind scan semua file tsx/ts
  ],
  darkMode: "class", // toggle dark mode berbasis class
  theme: {
    extend: {
      colors: {
        hijautua: "#204B38",       // Hijau tua - untuk navbar, footer, tombol
        hijaulakeabu: "#A3B5A1",   // Hijau keabuan - teks navbar/footer/link aktif
        kuninglidah: "#F9D923",    // Kuning terang - untuk link highlight
        textterang: "#F9FAF9",     // Teks terang - untuk latar gelap
        textgelap: "#1A1A1A",      // Teks gelap - untuk latar terang
        gelapagelap: "#0D1B16",    // Latar dark mode untuk konten
        tomboltext: "#204B38",     // Teks di atas tombol kuning (tidak dipakai sekarang, cadangan)
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
        "fade-in": "fade-in 0.4s ease-in",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ],
};
