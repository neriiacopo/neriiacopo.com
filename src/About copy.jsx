import { Box } from "@mui/material";

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
                backgroundColor: "rgba(0,0,0,1)",
                zIndex: -1,
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    p: 4,
                    fontSize: "2rem",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                }}
            >
                Iacopo Neri
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    p: 4,
                    width: "25vw",
                    textAlign: "justify",
                    fontSize: "0.8rem",
                    fontFamily: "Work-Sans, sans-serif",
                }}
            >
                With a research at the intersection of design, computer science,
                and the humanities, Iacopo Neri has been involved in teaching
                activities since 2015 in several institutions around Europe.
                Currently serving as scientific collaborator for the MPG Center
                for Digital Visual Studies and Computational Lead for IAAC, he
                is passionate about the implications of machine learning for
                urban, cultural and social studies.
            </Box>
        </Box>
    );
}
