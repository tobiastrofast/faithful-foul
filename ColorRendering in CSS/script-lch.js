let lchL = [];
let C = 60;
let h = [];
let lchdiv = document.querySelectorAll(".lch div");
let cField = document.querySelector(".lch input");
let lchbutton = document.querySelector(".lch button");

// create L and h value arrays
function createLh() {
    for (let i = 0; i < lchdiv.length; i++) {
        newlchL = Math.floor(Math.random() * 100);
        newh = Math.floor(Math.random() * 360);
        lchL.push(newlchL);
        h.push(newh);

    }
};
createLh();

function setLCH() {
    for (let j = 0; j < lchdiv.length; j++) {
        lchdiv[j].setAttribute("style", `background-color:lch(${lchL[j]}% ${C} ${h[j]})`);
        lchdiv[j].innerHTML = `<p>L:${lchL[j]}</p><p>C:${C}</p><p>h:${h[j]}&deg;</p>`;
    }
};
setLCH();

function updateC() {
    C = cField.value;
    setLCH();

}

function updateLh() {
    lchL = [];
    h = [];
    createLh();
    for (let j = 0; j < lchdiv.length; j++) {
        lchdiv[j].setAttribute("style", `background-color:lch(${lchL[j]}% ${C} ${h[j]})`);
        lchdiv[j].innerHTML = `<p>L:${lchL[j]}</p><p>C:${C}</p><p>h:${h[j]}&deg;</p>`;
    }

}

// add event listeners for the range slider and button
cField.addEventListener("input", updateC);
lchbutton.addEventListener("click", updateLh);