import { Box, IconButton } from "@mui/material";

import { Close, Remove, CropSquare } from "@mui/icons-material";

export default function ControlBar({ platform, colors }) {
    const isMac = platform === "mac";

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isMac ? "flex-start" : "space-between",
                alignItems: "center",
                py: 0.25,
                // backgroundColor: colors.main,
                cursor: "grab",
                // backdropFilter: "blur(10px)",
            }}
        >
            <PlatformBtns
                isMac={isMac}
                colors={colors}
            />
        </Box>
    );
}

function PlatformBtns({ isMac = false, colors }) {
    const dims = {
        width: 12,
        height: 12,
        borderRadius: "50%",
    };

    return (
        <>
            {isMac ? (
                <Box sx={{ display: "flex", gap: 1, p: 1.5 }}>
                    <Box sx={{ ...dims, backgroundColor: "#ff5f56" }} />
                    <Box sx={{ ...dims, backgroundColor: "#ffbd2e" }} />
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
        </>
    );
}
