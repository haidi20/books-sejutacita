const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            ...colors,
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '1440px',
            // => @media (min-width: 960px) { ... }

            'lg': '1536px',
            // => @media (min-width: 1440px) { ... }

            'xl': '1881px',
            // => @media (min-width: 1280px) { ... }

            // '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            minHeight: {
                "screen-75": "75vh",
            },
            fontSize: {
                55: "55rem",
            },
            opacity: {
                80: ".8",
            },
            zIndex: {
                2: 2,
                3: 3,
            },
            inset: {
                "-100": "-100%",
                "-225-px": "-225px",
                "-160-px": "-160px",
                "-150-px": "-150px",
                "-94-px": "-94px",
                "-50-px": "-50px",
                "-29-px": "-29px",
                "-20-px": "-20px",
                "25-px": "25px",
                "40-px": "40px",
                "95-px": "95px",
                "145-px": "145px",
                "195-px": "195px",
                "210-px": "210px",
                "260-px": "260px",
            },
            height: {
                "95-px": "95px",
                "70-px": "70px",
                "350-px": "350px",
                "500-px": "500px",
                "600-px": "600px",
            },
            maxHeight: {
                "860-px": "860px",
            },
            maxWidth: {
                "100-px": "100px",
                "120-px": "120px",
                "150-px": "150px",
                "180-px": "180px",
                "200-px": "200px",
                "210-px": "210px",
                "580-px": "580px",
            },
            minWidth: {
                "140-px": "140px",
                48: "12rem",
            },
            backgroundSize: {
                full: "100%",
            },
            backgroundImage: {
                'img-testimoni1': "linear-gradient(to top bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../public/images/testimoni1.png')",
            },
        },
    },
    variants: [
        "responsive",
        "group-hover",
        "focus-within",
        "first",
        "last",
        "odd",
        "even",
        "hover",
        "focus",
        "active",
        "visited",
        "disabled",
    ],
    plugins: [
        'postcss-import',
        'tailwindcss/nesting',
        'tailwindcss',
        'autoprefixer',
    ],
}