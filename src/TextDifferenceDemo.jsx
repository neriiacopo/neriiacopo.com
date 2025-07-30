import React from "react";
import { Box, Typography } from "@mui/material";

export default function TextDifferenceDemo() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('https://picsum.photos/1200/800')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Text with mix-blend-mode: difference */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "4rem",
                        fontWeight: 800,
                        color: "white",
                        mixBlendMode: "difference", // Magic happens here!
                    }}
                >
                    Difference Text
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1rem",
                        color: "white",
                        mixBlendMode: "difference",
                    }}
                >
                    The text color inverts depending on the background.
                </Typography>
            </Box>
        </Box>
    );
}
