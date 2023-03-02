let divs = document.querySelectorAll("div");
console.log(divs);
for (let items of divs) {
    items.addEventListener("click", copyValue);
}

function copyValue() {

    // this.setAttribute("style", "border: 1px solid red");
    let clickValue = this.getAttribute("style");
    clickValue = clickValue.slice(17);
    navigator.clipboard.writeText(clickValue);
    console.log(clickValue);
    alert(clickValue + " copied to the clipboard.");
};