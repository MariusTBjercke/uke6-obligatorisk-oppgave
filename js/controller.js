// controller
let bars = document.querySelectorAll("#content svg rect");

bars.forEach((bar, index) => {
    bar.onclick = function() {
        bar.classList.add("selected");
        chosenBar = index;
        show();
    }
});