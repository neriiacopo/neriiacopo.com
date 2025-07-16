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
