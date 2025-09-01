import "./style.css";

import { ThemeProvider, CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";

import ScreenCanvas from "./ScreenCanvas";
import About from "./About";

import { useState, useEffect } from "react";
import { useStore } from "./store/useStore";
import theme from "/theme.js";

export default function App() {
    const [manifest, setManifest] = useState([]);

    useEffect(() => {
        // Handle client-side routing - redirect /portfolio to home
        const currentPath = window.location.pathname;
        if (currentPath === "/portfolio" || currentPath === "/portfolio/") {
            window.history.replaceState(null, null, "/");
        }

        // Fetch the manifest file
        fetch("/manifest.json")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((el) => {
                    el.position = {};
                    // el.position.top = `${Math.floor(Math.random() * 50) + 10}%`;
                    // el.position.left = `${
                    //     Math.floor(Math.random() * Math.random() * 80) + 10
                    // }%`;
                    const screenDims = {
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };

                    // Adjust gap Y (minimized)
                    if (theme.isDesktop || theme.isTablet) {
                        el.position.top =
                            Math.floor(
                                Math.random() * ((screenDims.height / 5) * 3)
                            ) +
                            screenDims.height / 5;
                    } else {
                        el.position.top =
                            Math.random() * ((screenDims.height / 5) * 3) +
                            (screenDims.height / 5) * 1;
                    }
                    if (theme.isDesktop || theme.isTablet) {
                        el.position.left =
                            Math.random() * ((screenDims.width / 5) * 4) +
                            screenDims.width / 5;
                    } else {
                        el.position.left =
                            Math.random() * ((screenDims.width / 5) * 2) +
                            screenDims.width / 5;
                    }

                    // if (theme.isMobile) {
                    //     el.position.top = -el.position.top;
                    // }

                    // el.position.top = "500";
                    // el.position.left = "600";
                });
                setManifest(data.sort(() => Math.random() - 0.5));
                useStore.setState({
                    manifest: data.sort(() => Math.random() - 0.5),
                });
            })
            .catch((error) => {
                console.error("Error fetching manifest:", error);
            });
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ScreenCanvas manifest={manifest} />
                <About />
            </ThemeProvider>
        </>
    );
}
