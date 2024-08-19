// Typing Animation
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
var textArray = ["architecture", "design", "cartography"];
var speedForward = 100,
    speedWait = 1000,
    speedBetweenLines = 1000,
    speedBackspace = 100;

typeWriter("output", textArray);

function typeWriter(id, ar) {
    var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children("h1"),
        eParagraph = element.children("p");

    if (!isBackspacing) {
        if (i < aString.length) {
            if (aString.charAt(i) == "|") {
                isParagraph = true;
                eHeader.removeClass("cursor");
                eParagraph.addClass("cursor");
                i++;
                setTimeout(function () {
                    typeWriter(id, ar);
                }, speedBetweenLines);
            } else {
                if (!isParagraph) {
                    eHeader.text(eHeader.text() + aString.charAt(i));
                } else {
                    eParagraph.text(eParagraph.text() + aString.charAt(i));
                }
                i++;
                setTimeout(function () {
                    typeWriter(id, ar);
                }, speedForward);
            }
        } else if (i == aString.length) {
            isBackspacing = true;
            setTimeout(function () {
                typeWriter(id, ar);
            }, speedWait);
        }
    } else {
        if (eHeader.text().length > 12 || eParagraph.text().length > 0) {
            if (eParagraph.text().length > 0) {
                eParagraph.text(
                    eParagraph.text().substring(0, eParagraph.text().length - 1)
                );
            } else if (eHeader.text().length > 0) {
                eParagraph.removeClass("cursor");
                eHeader.addClass("cursor");
                eHeader.text(
                    eHeader.text().substring(0, eHeader.text().length - 1)
                );
            }
            setTimeout(function () {
                typeWriter(id, ar);
            }, speedBackspace);
        } else {
            isBackspacing = false;
            i = 0;
            isParagraph = false;
            a = (a + 1) % ar.length;
            setTimeout(function () {
                typeWriter(id, ar);
            }, 50);
        }
    }
}

// Transition for More Option Blog Picture
let elements = document.getElementsByClassName("test");
let popUp = function () {
    let parentId = this.parentElement.parentElement.id;
    this.parentElement.parentElement.classList.add("pop-up-left");
};
let refresh = function () {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", popUp, false);
    }
};
window.setInterval(refresh, 100);
