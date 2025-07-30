import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ChromeViewport({ content, maximized, onLoad }) {
    const [delayedMaximized, setDelayedMaximized] = useState(false);

    useEffect(() => {
        if (!maximized) {
            setDelayedMaximized(false);
        } else {
            const timer = setTimeout(() => setDelayedMaximized(maximized), 500);
            return () => clearTimeout(timer);
        }
    }, [maximized]);

    return (
        <>
            {/* {delayedMaximized ? (
                <iframe
                    src={`${content.pageUrl}`}
                    style={{
                        width: "100%",
                        height: "101%",
                        minHeight: "50vh",
                        // pointerEvents: active ? "auto" : "none",
                        scrolling: "no",
                        border: "none",
                    }}
                    title={content.title}
                    onLoad={() => onLoad(true)}
                />
            ) : (
                <img
                    src={`/img/desktop/${content.imgUrl}`}
                    alt={content.title}
                    draggable={false}
                    onLoad={() => onLoad(true)}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
            )} */}

            {!maximized ? (
                <img
                    src={`/img/desktop/${content.imgUrl}`}
                    alt={content.title}
                    draggable={false}
                    onLoad={() => onLoad(true)}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
            ) : delayedMaximized ? (
                <iframe
                    src={`${content.pageUrl}`}
                    style={{
                        width: "100%",
                        height: "101%",
                        minHeight: "50vh",
                        // pointerEvents: active ? "auto" : "none",
                        scrolling: "no",
                        border: "none",
                    }}
                    title={content.title}
                    onLoad={() => onLoad(true)}
                />
            ) : null}
        </>
    );
}
