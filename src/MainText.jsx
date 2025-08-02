import { Typography, Stack } from "@mui/material";

import { useTheme } from "@mui/material";

export default function MainText({ title, description }) {
    const theme = useTheme();
    const colors = theme.colors;

    return (
        <>
            <Stack
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    p: 4,

                    width: theme.isMobile ? "100%" : "33%",
                    // mixBlendMode: "difference",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 800,
                        pb: 2,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "0.7rem",
                        fontFamily: "Manrope, sans-serif",
                    }}
                    variant="body1"
                >
                    {description}
                </Typography>
            </Stack>
        </>
    );
}
