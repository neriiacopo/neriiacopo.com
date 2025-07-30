export function detectPlatform() {
    if (navigator.userAgentData) {
        return navigator.userAgentData.platform.toLowerCase().includes("mac")
            ? "mac"
            : "win";
    }
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("macintosh") || ua.includes("mac os x")) return "mac";
    if (ua.includes("windows")) return "win";
    return "unknown";
}

export function setActive(event) {
    const clicked = event.currentTarget;
    const browsers = document.querySelectorAll(".browser");

    console.log("Clicked:", clicked);
    console.log("Browsers:", browsers);

    browsers.forEach((el) => {
        if (el !== clicked) {
            el.classList.remove("active");
        }
        if (el === clicked && !el.classList.contains("active")) {
            el.classList.add("active");
        }
    });
}

export function getDeviceType() {
    if (typeof window === "undefined") {
        return { isMobile: false, isTablet: false, isDesktop: true };
    }

    const ua = navigator.userAgent;

    // User agent detection
    const isIPad = /iPad|Macintosh/.test(ua) && "ontouchend" in document;
    const isMobileUA = /Mobi|Android|iPhone|iPod/i.test(ua);

    // Screen size fallback
    const isMobileScreen = window.matchMedia("(max-width: 767px)").matches;
    const isTabletScreen = window.matchMedia(
        "(min-width: 768px) and (max-width: 1024px)"
    ).matches;

    const isMobile = (isMobileUA || isMobileScreen) && !isIPad;
    // const isMobile = true;
    const isTablet = isIPad || isTabletScreen;
    const isDesktop = !isMobile && !isTablet;

    return { isMobile, isTablet, isDesktop };
}

export function getDeviceInfo() {
    return { ...getDeviceType(), platform: detectPlatform() };
}
