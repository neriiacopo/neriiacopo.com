import { useState, useEffect, Fragment, use } from "react";
import { Box } from "@mui/material";

import ChromeMockup from "./ChromeMockup";

import { useTheme } from "@mui/material";
import { useStore } from "./store/useStore";

export default function ScreenCanvas({ manifest, desktopRef }) {
    const [stack, setStack] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const [mobileImg, setMobileImg] = useState(null);
    const active = useStore((state) => state.active);

    const theme = useTheme();
    const colors = theme.colors;

    // Initialize stack on first load
    useEffect(() => {
        if (manifest.length > 0 && stack.length === 0) {
            setStack(manifest.map((_, i) => i));
        }
    }, [manifest]);

    // Stagger appearance of items
    useEffect(() => {
        setVisibleItems([]); // reset in case manifest changes
        manifest.forEach((_, index) => {
            setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
            }, index * 100); // delay each by 100ms
        });
    }, [manifest]);

    const bringToFront = (clickedIndex) => {
        useStore.setState({ active: clickedIndex });
        setStack((prevStack) => {
            const newStack = prevStack.filter((i) => i !== clickedIndex);
            newStack.push(clickedIndex);
            return newStack;
        });
    };

    useEffect(() => {
        if (active !== null && theme.isMobile) {
            const activeItem = manifest[active];
            if (activeItem && activeItem.imgUrl) {
                setMobileImg(activeItem.imgUrl);
            }
        } else {
            // setMobileImg(null);
        }
    }, [active, manifest, theme.isMobile]);

    return (
        <>
            {theme.isMobile != undefined &&
                manifest.length > 0 &&
                manifest.map((item, index) => {
                    if (!visibleItems.includes(index)) return null;

                    const zIndex = stack.indexOf(index);

                    return (
                        <ChromeMockup
                            key={index}
                            content={{
                                imgUrl: item.imgUrl,
                                pageUrl: item.pageUrl,
                                dims: item.dims || {
                                    width: 800,
                                    height: 600,
                                },
                                title: item.title || "Mockup Content",
                                description:
                                    item.description ||
                                    "No description provided.",
                            }}
                            position={item.position}
                            platform={theme.platform}
                            active={active === index}
                            zIndex={zIndex + 1}
                            onClick={() => bringToFront(index)}
                            onClose={() => {
                                useStore.setState({ active: null });
                            }}
                            isMobile={theme.isMobile}
                            desktopRef={desktopRef}
                        />
                    );
                })}
            {/* Dark background overlay */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 100,

                    opacity: active === null || theme.isMobile ? 0 : 0.5,
                    backgroundColor: colors.background,
                    transition: "opacity 0.5s ease",
                    pointerEvents: "none",
                }}
            />
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
