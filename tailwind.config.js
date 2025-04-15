/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Sesuaikan dengan file yang perlu diproses oleh Tailwind
        './pages/**/*.{js,ts,jsx,tsx}', // Folder halaman
        './components/**/*.{js,ts,jsx,tsx}', // Folder komponen
        './app/**/*.{js,ts,jsx,tsx}', // Jika menggunakan app directory (Next.js 13+)
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'], // Menggunakan Inter sebagai font utama
                mono: ['var(--font-mono)', 'monospace'], // Menambahkan font monospaced
            },
        },
    },
    plugins: [],
}