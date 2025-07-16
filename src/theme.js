import { createTheme } from "@mui/material/styles";

const imgBackground = true;

const mode = "dark";

const colorsBig = {
    light: {
        main: imgBackground ? "transparent" : "rgba(224,224,224)",
        btns: "rgba(100,100,100)",
        brd: "rgba(192,192,192)",
        background: "rgba(240,240,240,1)",
        text: "rgba(0,0,0,0.8)",
        textLight: "rgba(0,0,0,0.5)",
        textDark: "rgba(0,0,0,0.3)",
    },
    dark: {
        main: imgBackground ? "transparent" : "rgba(31,31,31)",
        btns: "rgba(150,150,150)",
        brd: "rgba(63,63,63)",
        background: "rgba(15,15,15,1)",
        text: "rgba(255,255,255,0.8)",
        textLight: "rgba(255,255,255,0.5)",
        textDark: "rgba(255,255,255,0.3)",
    },
};

const colors = colorsBig[mode];

document.body.style.background = colors.background;

let theme = createTheme({
    colors,
});

export default theme;
