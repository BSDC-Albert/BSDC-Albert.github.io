const grabMyButton = document.getElementById("myButton");
const myFunc = function () {};
grabMyButton.addEventListener("click", myFunc);

const grabMyButton2 = document.getElementById("myButton2");
const grabBody = document.querySelector("body");
grabMyButton2.addEventListener("click", function () {
    if (grabBody.className === "red") {
        grabBody.className = "blue";
    } else {
        grabBody.className = "red";
    }
});