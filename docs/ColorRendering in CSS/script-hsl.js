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
createHS(); //run the function on load.

//add background color and display the values as text in the divs.
function setHSL() {
    for (let j = 0; j < hsldiv.length; j++) {
        hsldiv[j].setAttribute("style", `background-color:hsl(${H[j]} ${S[j]}% ${hslL}%)`);
        hsldiv[j].innerHTML = `<p>H:${H[j]}&deg;</p><p>S:${S[j]}%</p><p>L:${hslL}%</p>`;
    }
};
setHSL(); //run the function on load.

//function that updates the L value based on the slider value.
function updatehsL() {
    hslL = hslField.value;
    setHSL();

}

//function that empties the H and S array, creates new values and adds them to the divs.
function updateHS() {
    H = [];
    S = [];
    createHS(); //create new values
    for (let j = 0; j < hsldiv.length; j++) {
        hsldiv[j].setAttribute("style", `background-color:hsl(${H[j]} ${S[j]}% ${hslL}%)`);
        hsldiv[j].innerHTML = `<p>H:${H[j]}&deg;</p><p>S:${S[j]}%</p><p>L:${hslL}%</p>`;
    }

}
// add event listeners for the range slider and button
hslField.addEventListener("input", updatehsL);
hslbutton.addEventListener("click", updateHS);