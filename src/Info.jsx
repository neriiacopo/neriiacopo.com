import { Button, Box, Typography } from "@mui/material";

export default function Info({ content, colors, active }) {
    const transitionS = {
        transition:
            "margin 0.6s ease-in-out, opacity 0.6s ease-in-out, all 0.3s ease",
    };
    return (
        <>
            <Button
                sx={{
                    position: "absolute",
                    color: colors.text,
                    backgroundColor: colors.background,
                    p: 1,
                    px: 2,
                    border: `1px solid ${colors.brd}`,
                    borderRadius: 1000,
                    mt: active ? 1 : -1,
                    opacity: active ? 1 : 0.0,
                    zIndex: -1,
                    textTransform: "none",
                    fontFamily: "Manrope, sans-serif",
                    visibility: active ? "visible" : "hidden",
                    ...transitionS,
                }}
                onClick={() => {
                    window.open(content.pageUrl, "_blank");
                }}
            >
                Visit 🔗
            </Button>
            <Box
                sx={{
                    position: "absolute",
                    color: colors.text,
                    backgroundColor: colors.background,
                    top: 0,
                    left: "100%",
                    width: "300px",
                    p: 1,
                    px: 2,
                    borderRadius: 2,
                    ml: active ? 1 : -3,
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
                <Typography variant="body2">{content.description}</Typography>
            </Box>
        </>
    );
}
