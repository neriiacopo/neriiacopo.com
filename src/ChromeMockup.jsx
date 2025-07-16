import { useState, useRef } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import Draggable from "react-draggable";
import { useTheme } from "@mui/material";

import NavigationBar from "./mockup/NavigationBar";
import ControlBar from "./mockup/ControlBar";

export default function ChromeMockup({
    content = {
        imgUrl: null,
        pageUrl: null,
        dims: { width: 800, height: 600 },
    },
    platform = "mac",
    position = { top: 0, left: 0 },
    active = false,
    onClick = () => {},
    imgBackground = true,
    zIndex = 1,
}) {
    const theme = useTheme();
    const colors = theme.colors;
    const [loaded, setLoaded] = useState(false);
    const CLICK_TIME_THRESHOLD = 150;
    const mouseDownTime = useRef(0);

    const backImgS = {
        backgroundImage: content.imgUrl ? `url(${content.imgUrl})` : "none",
        backgroundSize: "300%",
        backgroundPosition: "center",
    };

    return (
        <Draggable
            handle=".drag-handle"
            bounds="#root"
            onMouseDown={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                    zIndex: active ? 1000 : zIndex,
                    pointerEvents: "none",
                }}
            >
                {/* This part is scaled */}
                <Box
                    sx={{
                        transform: `scale(${active ? 1 : 0.7})`,
                        transformOrigin: "center",
                        transition: "transform 0.3s ease, opacity 1s",
                        opacity: loaded ? 1 : 0,
                        pointerEvents: "auto",
                    }}
                >
                    <Paper
                        elevation={active ? 10 : 1}
                        sx={{
                            minWidth: "600px",
                            maxWidth: "600px",
                            borderRadius: 2,
                            overflow: "hidden",
                            backgroundColor: colors.main,
                            border: `1px solid ${colors.brd}`,
                            ...(imgBackground ? backImgS : {}),
                        }}
                        className="browser"
                    >
                        {/* Header */}
                        <Box
                            sx={{ backdropFilter: "blur(50px)" }}
                            className="drag-handle"
                        >
                            <ControlBar
                                platform={platform}
                                colors={colors}
                            />
                            <NavigationBar
                                content={content}
                                colors={colors}
                            />
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                            className="drag-handle"
                            onMouseDown={() => {
                                mouseDownTime.current = Date.now();
                            }}
                            onMouseUp={() => {
                                const duration =
                                    Date.now() - mouseDownTime.current;
                                if (
                                    duration < CLICK_TIME_THRESHOLD &&
                                    content.pageUrl &&
                                    !active
                                ) {
                                    // window.open(
                                    //     content.pageUrl,
                                    //     "_blank",
                                    //     "width=50vw,height=50vh,noopener,noreferrer"
                                    // );
                                    window.open(content.pageUrl, "_blank");
                                }
                            }}
                        >
                            {content.imgUrl ? (
                                <img
                                    src={content.imgUrl}
                                    alt={content.title}
                                    draggable={false}
                                    onLoad={() => setLoaded(true)}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            ) : (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    No image loaded
                                </Typography>
                            )}
                        </Box>

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
                                transition:
                                    "margin 0.6s ease-in-out, opacity 0.6s ease-in-out",
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
                                transition:
                                    "margin 0.6s ease-in-out, opacity 0.6s ease-in-out",
                                border: `1px solid ${colors.brd}`,
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
                    </Paper>
                </Box>
            </Box>
        </Draggable>
    );
}
