import { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import Draggable from "react-draggable";
import { useTheme } from "@mui/material";

import NavigationBar from "./mockup/NavigationBar";
import ControlBar from "./mockup/ControlBar";
import Info from "./Info";

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
    const nodeRef = useRef(null);
    const theme = useTheme();
    const colors = theme.colors;
    const [loaded, setLoaded] = useState(false);
    const [maximized, setMaximized] = useState(false);
    const [dragPos, setDragPos] = useState({
        x: position.left,
        y: position.top,
    });

    const backImgS = {
        backgroundImage: content.imgUrl ? `url(${content.imgUrl})` : "none",
        backgroundSize: "300%",
        backgroundPosition: "center",
    };

    useEffect(() => {
        setMaximized(false);
    }, [active]);

    return (
        <Draggable
            handle=".drag-handle"
            bounds="#root"
            nodeRef={nodeRef}
            disabled={maximized}
            position={maximized ? { x: 0, y: 0 } : dragPos}
            onStop={(e, data) => {
                setDragPos({ x: data.x, y: data.y });
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            <Box
                ref={nodeRef}
                sx={{
                    position: "absolute",
                    top: maximized ? "20vh" : `auto`,
                    left: maximized ? "20vw" : `auto`,
                    zIndex: active ? 1000 : zIndex,
                    pointerEvents: "none",
                    m: maximized ? 4 : 0,
                    p: 0,
                    transition: maximized ? "all 0.3s" : "none",
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
                            minWidth: maximized ? "80vw" : "600px",
                            maxWidth: maximized ? "80vw" : "600px",
                            maxHeight: maximized ? "90vh" : "auto",
                            transformOrigin: "center",
                            // m: maximized ? 5 : 0,
                            borderRadius: 2,
                            overflow: "hidden",
                            backgroundColor: colors.main,
                            border: `1px solid ${colors.brd}`,
                            ...(imgBackground ? backImgS : {}),
                            transition:
                                "min-width 0.3s ease,max-width 0.3s ease",
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
                                maximized={maximized}
                                setMaximized={setMaximized}
                            />
                            <NavigationBar
                                content={content}
                                colors={colors}
                            />
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: "#fff",

                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                overflow: "hidden",
                            }}
                            className="drag-handle"
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

                            {/* {maximized ? (
                                <iframe
                                    src={content.pageUrl}
                                    title={content.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        scale: 0.5,
                                    }}
                                />
                            ) : content.imgUrl ? (
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
                            )} */}
                        </Box>

                        <Info
                            content={content}
                            colors={colors}
                            active={active}
                        />
                    </Paper>
                </Box>
            </Box>
        </Draggable>
    );
}
