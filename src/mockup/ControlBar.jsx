import { Box, IconButton } from "@mui/material";

import { Close, Remove, CropSquare } from "@mui/icons-material";

export default function ControlBar({
    platform,
    colors,
    maximized,
    setMaximized,
}) {
    const isMac = platform === "mac";
    const dims = {
        width: 12,
        height: 12,
        borderRadius: "50%",
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isMac ? "flex-start" : "space-between",
                alignItems: "center",
                py: 0.25,
                cursor: "grab",
            }}
        >
            {isMac ? (
                <Box sx={{ display: "flex", gap: 1, p: 1.5 }}>
                    <Box sx={{ ...dims, backgroundColor: "#ff5f56" }} />
                    <Box
                        sx={{ ...dims, backgroundColor: "#ffbd2e" }}
                        onClick={() => {
                            setMaximized((prev) => !prev);
                        }}
                    />
                    <Box sx={{ ...dims, backgroundColor: "#27c93f" }} />
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                    }}
                >
                    <IconButton
                        size="small"
                        sx={{
                            px: 1.5,
                            py: 1,
                            borderRadius: 0,
                            color: colors.btns,
                        }}
                    >
                        <Remove fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        size="small"
                        sx={{
                            px: 1.5,
                            py: 1,
                            borderRadius: 0,
                            color: colors.btns,
                        }}
                        onClick={() => {
                            setMaximized((prev) => !prev);
                        }}
                    >
                        <CropSquare fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        size="small"
                        sx={{
                            px: 1.5,
                            py: 1,
                            borderRadius: 0,
                            color: colors.btns,
                        }}
                    >
                        <Close fontSize="inherit" />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
}
