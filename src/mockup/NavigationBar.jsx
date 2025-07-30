import { Box, IconButton, Typography } from "@mui/material";

import {
    ArrowBack,
    ArrowForward,
    Refresh,
    MoreVert,
} from "@mui/icons-material";

export default function NavigationBar({ content, colors }) {
    const navIcons = {
        left: [
            <ArrowBack fontSize="small" />,
            <ArrowForward fontSize="small" />,
            <Refresh fontSize="small" />,
        ],
        right: [<MoreVert fontSize="small" />],
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 0.5,
                borderBottom: `1px solid ${colors.brd}`,
            }}
            className="btns"
        >
            {/* Left navigation icons */}
            {navIcons.left.map((icon, index) => (
                <IconButton
                    key={index}
                    sx={{ color: colors.btns }}
                    size="small"
                >
                    {icon}
                </IconButton>
            ))}

            {/* Address bar */}
            <Box
                sx={{
                    flexGrow: 1,
                    mx: 1,
                    px: 2,
                    py: 0.5,
                    backgroundColor: "white",
                    borderRadius: 100,
                    border: `1px solid ${colors.brd}`,
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    pointerEvents: "auto",
                }}
            >
                <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                >
                    {content.pageUrl || "https://example.com"}
                </Typography>
            </Box>

            {/* Right navigation icons */}
            {navIcons.right.map((icon, index) => (
                <IconButton
                    key={index}
                    sx={{ color: colors.btns }}
                    size="small"
                >
                    {icon}
                </IconButton>
            ))}
        </Box>
    );
}
