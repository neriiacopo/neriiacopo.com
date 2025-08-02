import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";

import { useStore } from "./store/useStore";

import MainText from "./MainText";

export default function Overlay({ active, zIndex }) {
    const theme = useTheme();
    const colors = theme.colors;

    const manifest = useStore((state) => state.manifest);

    const [mobileImg, setMobileImg] = useState(null);
    const [lastContent, setLastContent] = useState(null);

    useEffect(() => {
        if (active !== null && theme.isMobile) {
            const activeItem = manifest[active];

            if (activeItem && activeItem.imgUrl) {
                // setMobileImg(activeItem.imgUrl);
                setLastContent(activeItem);
            }
        } else {
        }
    }, [active, manifest, theme.isMobile]);

    return (
        <>
            {/* Dark background overlay */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: zIndex,

                    backgroundColor: colors.background,

                    pointerEvents: "none",
                    color: "white",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    opacity: active === null ? 0 : theme.isMobile ? 1 : 0.5,
                    transition: "opacity 0.5s ease, filter 0.2s ease",
                    ...(theme.isMobile
                        ? {
                              backgroundImage: `url(img/mobile/${lastContent?.imgUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }
                        : {}),
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        // zIndex: 10,
                        background:
                            "linear-gradient(to bottom, black 0%, transparent 100%)",
                        opacity: 0.8,
                        // opacity: active === null ? 1 : 0.8,
                        transition:
                            "opacity 0.5s ease, filter 0.2s ease, background 3s ease",
                    }}
                ></Box>
                {theme.isMobile && (
                    <MainText
                        title={lastContent?.title}
                        description={lastContent?.description}
                    />
                )}
            </Box>

            {/* Dummy for outside click*/}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    opacity: active === null ? 0 : 100,
                    pointerEvents: "auto",
                }}
                onClick={() => useStore.setState({ active: null })}
            />
        </>
    );
}
