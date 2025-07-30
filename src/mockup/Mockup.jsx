import { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper, Tooltip } from "@mui/material";
import Draggable from "react-draggable";
import { useTheme } from "@mui/material";

import Header from "./Header";
import Info from "./Info";
import ChromeViewport from "./ChromeViewport";
import PdfViewport from "./PdfViewport";
import { m } from "framer-motion";

export default function Mockup({
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
    const [dragPos, setDragPos] = useState({
        x: position.left,
        y: position.top,
    });

    const backImgS = {
        backgroundImage: content.imgUrl
            ? `url(img/${isMobile ? "mobile" : "desktop"}/${content.imgUrl})`
            : "none",
        backgroundSize: "300%",
        backgroundPosition: "center",
    };

    useEffect(() => {
        setMaximized(false);
        if (active) {
            if (!isMobile) {
                setMinimized(false);
            }
        }
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
            }, "1000");
        }
    }, []);

    const dims = {
        web: {
            width: "33vw",
            minWidth: isMobile ? "auto" : "500px",
            minHeight: "auto",
        },
        pdf: {
            width: "25vw",
            minWidth: isMobile ? "auto" : "350px",
            minHeight: "50vh",
        },
        // image: { width: 800, height: 600 },
    };

    const w =
        closed || minimized
            ? "auto"
            : maximized
            ? "80vw"
            : dims[content.type].width;

    const mS = "1vw";

    return (
        <Draggable
            handle=".drag-handle"
            bounds="#root"
            cancel=".btns"
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
                if (e.target.classList && e.target.classList.contains("btns"))
                    console.log("btns");
                onClick();
            }}
            // onMouseUp={(e) => {
            //     e.stopPropagation();
            // }}
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
                            minWidth:
                                minimized || closed
                                    ? "auto"
                                    : dims[content.type].minWidth,
                            width: w,
                            maxWidth: w,
                            maxHeight: maximized
                                ? "90vh"
                                : dims[content.type].minHeight,
                            height: maximized ? "90vh" : "auto",

                            transformOrigin: "center",

                            borderRadius: closed || minimized ? "1000px" : 2,
                            overflow: "hidden",
                            backgroundColor: colors.main,
                            border: `1px solid ${colors.brd}`,
                            ...(imgBackground ? backImgS : {}),
                            transition:
                                "min-width 0.3s ease,max-width 0.3s ease",
                            display: "flex",
                            flexDirection: "column",
                        }}
                        className="browser"
                    >
                        {/* Header */}

                        <Header
                            platform={"win"}
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
                            <Box
                                sx={{
                                    // backgroundColor: "#fff",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    cursor: "pointer",
                                    overflowY:
                                        content.type == "pdf"
                                            ? "auto"
                                            : "hidden",
                                    overflowX: "hidden",
                                    height: "100%",
                                    backdropFilter: "blur(50px)",
                                    userSelect: "none",
                                }}
                                className="drag-handle"
                            >
                                {closed || minimized ? null : content.type ==
                                  "web" ? (
                                    <ChromeViewport
                                        content={content}
                                        colors={colors}
                                        maximized={maximized}
                                        onLoad={setLoaded}
                                    />
                                ) : content.type == "pdf" ? (
                                    <PdfViewport
                                        content={content}
                                        colors={colors}
                                        maximized={maximized}
                                        onLoad={setLoaded}
                                        active={active}
                                    />
                                ) : null}
                            </Box>
                        )}

                        {/* <ChromeViewport
                                        content={content}
                                        colors={colors}
                                        maximized={maximized}
                                        onLoad={setLoaded}
                                    /> */}

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
