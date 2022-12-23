/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins",
                preahvihear: "Preahvihear",
            },
            colors: {
                primary: "#11071F",
                secondary: "#9857D3",
                light:"#693B93"
                
            },
            backgroundImage:{
                'project-pattern': "url('/project.png')",
            }
        },
    },
    plugins: [],
};
