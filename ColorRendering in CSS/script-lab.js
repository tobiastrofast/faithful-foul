let labL = 50;
let a = [];
let b = [];
let labdiv = document.querySelectorAll(".lab div");
let labField = document.querySelector(".lab input");
let labbutton = document.querySelector(".lab button");

// create a and b value arrays
function createAB() {
    for (let i = 0; i < labdiv.length; i++) {
        newA = Math.floor(Math.random() * 201) - 100;
        newB = Math.floor(Math.random() * 201) - 100;
        a.push(newA);
        b.push(newB);

    }

};
createAB();

function setLAB() {
    for (let j = 0; j < labdiv.length; j++) {
        labdiv[j].setAttribute("style", `background-color:lab(${labL}% ${a[j]} ${b[j]})`);
        labdiv[j].innerHTML = `<p>L:${labL}</p><p>a:${a[j]}</p><p>b:${b[j]}</p>`;
    }
};
setLAB();

function updateLab() {
    labL = labField.value;
    setLAB();

}

function updateAB() {
    a = [];
    b = [];
    createAB();
    for (let j = 0; j < labdiv.length; j++) {
        labdiv[j].setAttribute("style", `background-color:lab(${labL}% ${a[j]} ${b[j]})`);
        labdiv[j].innerHTML = `<p>L:${labL}</p><p>a:${a[j]}</p><p>b:${b[j]}</p>`;
    }

}
// add event listeners for the range slider and button
labField.addEventListener("input", updateLab);
labbutton.addEventListener("click", updateAB);