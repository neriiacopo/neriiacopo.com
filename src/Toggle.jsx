import { IconButton, Box } from "@mui/material";
import { useState, useEffect } from "react";

import GridIcon from "@mui/icons-material/Apps";
import ScatterIcon from "@mui/icons-material/ScatterPlot";

export default function Toggle() {
    const [mode, setMode] = useState("scat");

    // const opts = [
    //     { label: "scat", icon: <ScatterIcon />, fn: () => setMode("grid") },
    //     { label: "grid", icon: <GridIcon />, fn: () => setMode("scat") },
    // ];

    const opts = {
        scat: {
            icon: <ScatterIcon />,
            fn: () => setMode("grid"),
        },
        grid: {
            icon: <GridIcon />,
            fn: () => setMode("scat"),
        },
    };

    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    p: 4,
                    zIndex: 0,
                }}
            >
                {mode && (
                    <IconButton
                        onClick={opts[mode].fn}
                        sx={{
                            color: "white",
                            pointerEvents: "all",
                            cursor: "pointer",
                        }}
                    >
                        {opts[mode].icon}
                    </IconButton>
                )}
            </Box>
        </>
    );
}
