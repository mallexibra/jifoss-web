/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                sacramento: ['Sacramento', 'sans-serif',],
            },
            colors: {
                primary: "#519872"
            }
        },
    },
    plugins: [],
}
