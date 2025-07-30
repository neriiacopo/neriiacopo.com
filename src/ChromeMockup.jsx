import { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper, Tooltip } from "@mui/material";
import Draggable from "react-draggable";
import { useTheme } from "@mui/material";

import Header from "./mockup/Header";
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
    imgBackground = true,
    zIndex = 1,
    isMobile = false,
    onClick = () => {},
    onChange = () => {},
    onClose = () => {},
}) {
    const nodeRef = useRef(null);
    const theme = useTheme();
    const colors = theme.colors;
    const [closed, setClosed] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [maximized, setMaximized] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [toolUp, setToolUp] = useState(false);
    const [dragPos, setDragPos] = useState({
        x: position.left,
        y: position.top,
    });

    const backImgS = {
        backgroundImage: content.imgUrl
            ? `url(img/desktop/${content.imgUrl})`
            : "none",
        backgroundSize: "300%",
        backgroundPosition: "center",
    };

    useEffect(() => {
        setMaximized(false);
        // if (active) {
        //     if (!isMobile) {
        //         setMinimized(false);
        //     }
        //     if (isMobile) {
        //         setToolUp(true);
        //     }
        // }
    }, [active]);

    useEffect(() => {
        if (closed) {
            setMaximized(false);
            setMinimized(false);
            onClose();
        }

        if (minimized) {
            onClose();
        }
    }, [closed, minimized]);

    useEffect(() => {
        if (theme.isMobile) {
            setMinimized(true);
        }
        if (isMobile) {
            setTimeout(() => {
                setLoaded(true);
                // if (isMobile) {
                //     setToolUp(true);
                // }
            }, "1000");
        }
    }, []);

    const w = closed || minimized ? "auto" : maximized ? "80vw" : "33vw";
    const mS = "1vw";

    return (
        <Draggable
            handle=".drag-handle"
            bounds="#root"
            nodeRef={nodeRef}
            disabled={maximized || closed}
            position={maximized ? { x: 0, y: 0 } : dragPos}
            onStop={(e, data) => {
                setDragPos({ x: data.x, y: data.y });
                if (isMobile) {
                    onClose();
                }
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
                    zIndex: closed ? 0 : active ? 1000 : zIndex,
                    pointerEvents: "none",
                    m: maximized ? mS : 0,
                    p: 0,
                    transition: maximized ? "all 0.3s" : "none",
                    cursor: minimized ? "pointer" : "auto",
                }}
            >
                {/* This part is scaled */}
                <Box
                    sx={{
                        transform: `scale(${
                            (!closed || !minimized) && active ? 1 : 0.7
                        })`,
                        transformOrigin: "center",
                        transition: "transform 0.3s ease, opacity 1s",
                        opacity: loaded ? 1 : 0,
                        pointerEvents: "auto",
                    }}
                >
                    <Paper
                        elevation={active ? 10 : 1}
                        sx={{
                            minWidth: w,
                            maxWidth: w,
                            maxHeight: maximized ? "90vh" : "auto",

                            transformOrigin: "center",
                            // m: maximized ? 5 : 0,
                            borderRadius: closed || minimized ? "1000px" : 2,
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

                        <Header
                            platform={platform}
                            colors={colors}
                            isMobile={isMobile}
                            maximized={maximized}
                            setMaximized={setMaximized}
                            content={content}
                            active={active}
                            closed={closed}
                            setClosed={setClosed}
                            minimized={minimized}
                            setMinimized={setMinimized}
                        />

                        {!isMobile && (
                            // Desktop version ------------------
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
                                {closed || minimized ? null : content.imgUrl ? (
                                    <img
                                        src={`/img/desktop/${content.imgUrl}`}
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
                        )}

                        {isMobile || closed || minimized ? null : (
                            <Info
                                content={content}
                                colors={colors}
                                active={active}
                                maximized={maximized}
                                onChange={onChange}
                            />
                        )}
                    </Paper>
                </Box>
            </Box>
        </Draggable>
    );
}
