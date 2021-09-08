// controller

function selectBar(index) {
    chosenBar = index;
    show();
}

function removeBar(barNumber) {
    numbers.splice(barNumber - 1, 1);
    show();
}

addEventListener("click", function(e) {
    if (e.target.tagName != "rect" && e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        chosenBar = "";
        show();
    }
})