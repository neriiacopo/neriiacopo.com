import "./style.css";

import { ThemeProvider, CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";

import ScreenCanvas from "./ScreenCanvas";
import About from "./About";

import { useState, useEffect } from "react";

import theme from "/theme.js";

function Index() {
    const [manifest, setManifest] = useState([]);

    useEffect(() => {
        // Fetch the manifest file
        fetch("/manifest.json")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((el) => {
                    el.position = {};
                    el.position.top = `${Math.floor(Math.random() * 50) + 10}%`;
                    el.position.left = `${
                        Math.floor(Math.random() * Math.random() * 80) + 10
                    }%`;
                });
                console.log(data);
                setManifest(data.sort(() => Math.random() - 0.5));
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
