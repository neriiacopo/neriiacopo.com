import { Box, Typography } from "@mui/material";

import ControlBar from "./ControlBar";
import NavigationBar from "./NavigationBar";

export default function Header({
    platform,
    colors,
    isMobile,
    maximized,
    setMaximized,
    content,
    active,
    closed,
    setClosed,
    minimized,
    setMinimized,
}) {
    return (
        <Box
            sx={{
                backdropFilter: minimized ? "blur(10px)" : "blur(50px)",
                px: minimized || closed ? 2 : "auto",
                py: minimized || closed ? 1 : "auto",
                backgroundColor:
                    closed || (isMobile && active) ? "black" : "auto",
                color:
                    closed || (isMobile && active)
                        ? "rgba(255, 255, 255, 1)"
                        : "auto",
                transition: "all 0.3s ease",
                // mixBlendMode:
                //     closed || (isMobile && active) ? "none" : "difference",
            }}
            className="drag-handle"
        >
            {closed || minimized ? (
                <Typography>{content.title}</Typography>
            ) : (
                <>
                    <ControlBar
                        platform={platform}
                        colors={colors}
                        setMaximized={setMaximized}
                        setClosed={setClosed}
                        setMinimized={setMinimized}
                    />
                    <NavigationBar
                        content={content}
                        colors={colors}
                    />
                </>
            )}
        </Box>
    );
}
