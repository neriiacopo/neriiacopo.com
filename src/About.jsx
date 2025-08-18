import { useState, useEffect, Fragment, use } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useTheme } from "@mui/material";
import { useStore } from "./store/useStore";

import MainText from "./MainText";

export default function About() {
    const theme = useTheme();
    const colors = theme.colors;
    const active = useStore((state) => state.active);
    const manifest = useStore((state) => state.manifest);

    const [mobileImg, setMobileImg] = useState(null);

    useEffect(() => {
        if (active !== null && theme.isMobile) {
            const activeItem = manifest[active];
            if (activeItem && activeItem.imgUrl) {
                setMobileImg(activeItem.imgUrl);
            }
        } else {
        }
    }, [active, manifest, theme.isMobile]);

    const textContent = {
        title:
            (theme.isMobile && active == null) || !theme.isMobile
                ? "Iacopo Neri"
                : manifest[active]?.title,
        description:
            (theme.isMobile && active == null) || !theme.isMobile
                ? "With a research at the intersection of design, computer science, and the humanities, Iacopo Neri has been involved in teaching activities since 2015 in several institutions around Europe. Currently serving as scientific collaborator for the MPG Center for Digital Visual Studies and Computational Lead for IAAC, he is passionate about the implications of machine learning for urban, cultural and social studies."
                : manifest[active]?.description,
    };

    const title = "Iacopo Neri";
    const subtitle =
        "With a research at the intersection of design, computer science, and the humanities, Iacopo Neri has been involved in academia since 2015 in several institutions around Europe. Currently serving as scientific collaborator for the MPG Center for Digital Visual Studies and Computational Lead for IAAC, he is passionate about the implications of machine learning for urban, cultural and social studies.";

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                color: "white",
                backgroundColor: colors.background,
                zIndex: -1,
                display: "flex",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    // zIndex: -1,

                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    opacity: active === null ? 0 : theme.isMobile ? 1 : 0.5,
                    transition: "opacity 0.5s ease, filter 0.2s ease",
                    ...(theme.isMobile
                        ? {
                              backgroundImage: `url(img/mobile/${mobileImg})`,
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
                        opacity: active === null ? 1 : 0.8,
                        transition: "opacity 0.5s ease, filter 0.2s ease",
                    }}
                ></Box>
            </Box>

            <MainText
                title={title}
                description={subtitle}
            />
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    p: 4,
                    pointerEvents: "none",
                }}
            >
                <img
                    src="/logo.png"
                    alt="Logo"
                    width={42}
                    height={42}
                />
            </Box>
        </Box>
    );
}
