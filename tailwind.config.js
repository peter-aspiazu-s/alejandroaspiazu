// Si tienes una carpeta src/ en tu proyecto:
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navbar-dark': '#212529', // <-- Add your custom color here
      },
    },
  },
  plugins: [],
  // ...
};