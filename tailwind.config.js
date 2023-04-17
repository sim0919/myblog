/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                linerg: ["LINE-Regulr"],
                linebd: ["LINE-Bold"],
                lineth: ["LINE-Thin"],
            },
        },
    },
    plugins: [],
};
