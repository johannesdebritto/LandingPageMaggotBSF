/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                montserrat: ['var(--font-montserrat)', 'sans-serif'],
                lato: ['var(--font-lato)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};