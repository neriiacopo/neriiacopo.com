import { createTheme } from "@mui/material/styles";
import { getDeviceInfo } from "./utils";

const imgBackground = true;

const mode = "dark";

const device = getDeviceInfo();

const rootStyle = document.getElementById("root")?.style;
if (rootStyle) {
    if (!device.isMobile) {
        rootStyle.top = "-20vh";
        rootStyle.left = "-20vw";
        rootStyle.width = "140vw";
        rootStyle.height = "140vh";
    } else {
        rootStyle.top = 0;
        rootStyle.left = "-10vw";
        rootStyle.width = "120vw";
        rootStyle.height = "100vh";
    }
}

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
    isMobile: device.isMobile,
    isTablet: device.isTablet,
    isDesktop: device.isDesktop,
    platform: device.platform,
});

export default theme;
