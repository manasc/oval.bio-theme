const pxToRem = (px, base = 16) => `${px / base}rem`;

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === "production",
        content: ["./**/*.php", "./**/*.jsx"],
    },
    theme: {
        extend: {
            height: {
                72: pxToRem(340),
            },
            fontFamily: {
                brand: ["Rubik", "sans-serif"],
                sans: ["Lato", "sans-serif"],
            },
            screens: {
                "2xl": "1440px",
            },
            maxWidth: {
                "2xs": "16rem",
                "3xs": "12rem",
            },
            fontSize: {
                "2xs": "0.675rem",
            },
            colors: {
                ovalGreen: "#77e0a1",
                ovalGreenDark: "#38b795",
                ovalGreenLight: "#9fe9bd",
                skyBlue: "#76b9d6",
                slateBlue: "#8fb1bf",
                slateBlueLight: "#99bbc9",
            },
        },
        future: {
            removeDeprecatedGapUtilities: true,
        },
    },
};
