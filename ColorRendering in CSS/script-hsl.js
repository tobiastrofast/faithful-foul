//script for HSL initial random values
let H = [];
let S = [];
let hslL = 50;
let hsldiv = document.querySelectorAll(".hsl div");
let hslField = document.querySelector(".hsl input");
let hslbutton = document.querySelector(".hsl button");

// create H and S value arrays
function createHS() {
    for (let i = 0; i < hsldiv.length; i++) {
        newH = Math.floor(Math.random() * 360);
        newS = Math.floor(Math.random() * 100);
        H.push(newH);
        S.push(newS);

    }
};
createHS();

function setHSL() {
    for (let j = 0; j < hsldiv.length; j++) {
        hsldiv[j].setAttribute("style", `background-color:hsl(${H[j]} ${S[j]}% ${hslL}%)`);
        hsldiv[j].innerHTML = `<p>H:${H[j]}&deg;</p><p>S:${S[j]}%</p><p>L:${hslL}%</p>`;
    }
};
setHSL();

function updatehsL() {
    hslL = hslField.value;
    setHSL();

}

function updateHS() {
    H = [];
    S = [];
    createHS();
    for (let j = 0; j < hsldiv.length; j++) {
        hsldiv[j].setAttribute("style", `background-color:hsl(${H[j]} ${S[j]}% ${hslL}%)`);
        hsldiv[j].innerHTML = `<p>H:${H[j]}&deg;</p><p>S:${S[j]}%</p><p>L:${hslL}%</p>`;
    }

}
// add event listeners for the range slider and button
hslField.addEventListener("input", updatehsL);
hslbutton.addEventListener("click", updateHS);