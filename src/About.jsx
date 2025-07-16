import { Box, Stack, Typography } from "@mui/material";

import { useTheme } from "@mui/material";

export default function About() {
    const theme = useTheme();
    const colors = theme.colors;

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                color: "white",
                backgroundColor: colors.background,
                zIndex: -1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}
        >
            <Stack
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    p: 4,

                    width: "33%",
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
                    Iacopo Neri
                </Typography>
                <Typography
                    sx={{
                        fontSize: "0.7rem",
                        fontFamily: "Manrope, sans-serif",
                    }}
                    variant="body1"
                >
                    With a research at the intersection of design, computer
                    science, and the humanities, Iacopo Neri has been involved
                    in teaching activities since 2015 in several institutions
                    around Europe. Currently serving as scientific collaborator
                    for the MPG Center for Digital Visual Studies and
                    Computational Lead for IAAC, he is passionate about the
                    implications of machine learning for urban, cultural and
                    social studies.
                </Typography>
            </Stack>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    p: 4,
                    pointerEvents: "none",
                }}
            >
                <img
                    src="/logo.png"
                    alt="Logo"
                    width={42}
                    height={42}
                />
            </Box>
        </Box>
    );
}
