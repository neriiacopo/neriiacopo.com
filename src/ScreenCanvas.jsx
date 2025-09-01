import { useState, useEffect, Fragment, use } from "react";

import Mockup from "./mockup/Mockup";
import Overlay from "./Overlay";

import { useTheme } from "@mui/material";
import { useStore } from "./store/useStore";

export default function ScreenCanvas({ manifest, desktopRef }) {
    const [stack, setStack] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
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

    return (
        <>
            {theme.isMobile != undefined &&
                manifest.length > 0 &&
                manifest.map((item, index) => {
                    if (!visibleItems.includes(index)) return null;
                    if (item.type == "") return null;

                    const zIndex = stack.indexOf(index);
                    return (
                        <Mockup
                            key={index}
                            content={item}
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

            <Overlay
                active={active}
                zIndex={stack.length - 1}
            />
        </>
    );
}
