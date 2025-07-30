import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export default function MobileMockup({ active, content }) {
    const theme = useTheme();
    const colors = theme.colors;
    const transitionS = {
        transition:
            "margin 0.6s ease-in-out, opacity 0.6s ease-in-out, all 0.3s ease",
    };

    const off = "0.5vw";
    return (
        <>
            {active && (
                <Box
                    sx={{
                        position: "fixed",
                        zIndex: 999,
                        height: "100%",
                        width: "100vw",
                        // visibility: active ? "visible" : "hidden",
                        overlay: "hidden",
                        // left: "5vw",
                        left: 0,

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        pointerEvents: "none",
                    }}
                >
                    <Box
                        sx={{
                            m: "1vh",
                            height: "auto",
                            maxHeight: "50vh",
                            overflowY: "auto",
                        }}
                    >
                        <Box
                            sx={{
                                color: colors.text,
                                backgroundColor: colors.background,
                                height: "100%",
                                p: 1,
                                px: 2,
                                borderRadius: 2,
                                ml: active ? off : -3,
                                opacity: active ? 1 : 0.0,
                                zIndex: -1,
                                textTransform: "none",
                                fontFamily: "Manrope, sans-serif",
                                border: `1px solid ${colors.brd}`,
                                visibility: active ? "visible" : "hidden",
                                ...transitionS,
                            }}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                            >
                                {content.title}
                            </Typography>
                            <Typography variant="body2">
                                {content.description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
}
