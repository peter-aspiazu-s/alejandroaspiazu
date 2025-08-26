// Si tienes una carpeta src/ en tu proyecto:
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px", // ejemplo personalizado
      },
    },
    extend: {
      colors: {
        'navbar-dark': '#212529', // <-- Add your custom color here
      },
    },
  },
  plugins: [],
  // ...
};