import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

import ScreenCanvas from "./ScreenCanvas";

export default function BioViewer({ colors, manifest }) {
    const [markdown, setMarkdown] = useState("");
    const desktopRef = useRef(null);

    useEffect(() => {
        fetch("/bio.md") // Make sure bio.md is in your public folder
            .then((res) => res.text())
            .then(setMarkdown);
    }, []);

    return (
        <Box
            ref={desktopRef}
            sx={{
                overflowX: "auto",
                overflowY: "hidden",
                width: "100%",
                height: "100vh",
                whiteSpace: "nowrap",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    maxHeight: "100vh",
                    p: 4,
                    pt: "20vh",
                    columnWidth: 300,
                    columnGap: 5,
                    whiteSpace: "normal",
                    fontSize: "0.7rem",
                    fontFamily: "Manrope, sans-serif",
                    pointerEvents: "none",
                }}
            >
                <ReactMarkdown
                    components={{
                        h2: ({ node, ...props }) => (
                            <h2
                                style={{
                                    color: colors.text,
                                    fontSize: "1.5rem",
                                    marginBottom: "1rem",
                                }}
                                {...props}
                            />
                        ),
                        p: ({ node, ...props }) => (
                            <p
                                style={{
                                    margin: "0 0 0.5em 0",
                                    lineHeight: 1.7,
                                    color: colors.textDark,
                                }}
                                {...props}
                            />
                        ),
                    }}
                >
                    {markdown}
                </ReactMarkdown>
            </Box>
            <ScreenCanvas
                manifest={manifest}
                desktopRef={desktopRef}
            />
        </Box>
    );
}
