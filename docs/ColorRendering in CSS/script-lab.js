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
createAB(); //run the function on load.

//add background color and display the values as text in the divs.
function setLAB() {
    for (let j = 0; j < labdiv.length; j++) {
        labdiv[j].setAttribute("style", `background-color:lab(${labL}% ${a[j]} ${b[j]})`);
        labdiv[j].innerHTML = `<p>L:${labL}</p><p>a:${a[j]}</p><p>b:${b[j]}</p>`;
    }
};
setLAB(); //run the function on load.

//function that updates the L value based on the slider value.
function updateLab() {
    labL = labField.value;
    setLAB();

}

//function that empties the H and S array, creates new values and adds them to the divs.
function updateAB() {
    a = [];
    b = [];
    createAB(); //create new values
    for (let j = 0; j < labdiv.length; j++) {
        labdiv[j].setAttribute("style", `background-color:lab(${labL}% ${a[j]} ${b[j]})`);
        labdiv[j].innerHTML = `<p>L:${labL}</p><p>a:${a[j]}</p><p>b:${b[j]}</p>`;
    }

}
// add event listeners for the range slider and button
labField.addEventListener("input", updateLab);
labbutton.addEventListener("click", updateAB);