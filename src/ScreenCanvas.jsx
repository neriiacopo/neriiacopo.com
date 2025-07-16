import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import ChromeMockup from "./ChromeMockup";
import { detectPlatform } from "./utils";
import { useTheme } from "@mui/material";

export default function ScreenCanvas({ manifest, desktopRef }) {
    const [platform, setPlatform] = useState("win");
    const [stack, setStack] = useState([]);
    const [active, setActive] = useState(null);
    const [visibleItems, setVisibleItems] = useState([]);

    const theme = useTheme();
    const colors = theme.colors;

    useEffect(() => {
        setPlatform(detectPlatform());
    }, []);

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
        setActive(clickedIndex);
        setStack((prevStack) => {
            const newStack = prevStack.filter((i) => i !== clickedIndex);
            newStack.push(clickedIndex);
            return newStack;
        });
    };

    return (
        <>
            {manifest.length > 0 &&
                manifest.map((item, index) => {
                    if (!visibleItems.includes(index)) return null;

                    const zIndex = stack.indexOf(index);

                    return (
                        <ChromeMockup
                            key={index}
                            content={{
                                imgUrl: item.imgUrl,
                                pageUrl: item.pageUrl,
                                dims: item.dims || { width: 800, height: 600 },
                                title: item.title || "Mockup Content",
                                description:
                                    item.description ||
                                    "No description provided.",
                            }}
                            position={item.position}
                            platform={platform}
                            active={active === index}
                            zIndex={zIndex + 10}
                            onClick={() => bringToFront(index)}
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
                    opacity: active === null ? 0 : 0.5,
                    backgroundColor: colors.background,
                    transition: "opacity 1s ease",
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
                onClick={() => setActive(null)}
            />
        </>
    );
}
