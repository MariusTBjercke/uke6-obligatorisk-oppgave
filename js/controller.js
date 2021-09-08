// controller

function selectBar(index) {
    chosenBar = index;
    show();
}

// Onclick funksjon for å legge til en ny stolpe
function addBar(number) {
    if (inputValue <= 10 && inputValue >= 1) {
        numbers.push(number);
        show();
    } else {
        errorMsg();
    }
}

// Onclick funksjon for å endre valgt stolpe
function editBar(barNumber) {
    if (inputValue <= 10 && inputValue >= 1) {
        numbers.splice(barNumber - 1, 1, inputValue);
        show();
    } else {
        errorMsg();
    }
}

// Onclick funksjon for å slette valgt stolpe fra array
function removeBar(barNumber) {
    numbers.splice(barNumber - 1, 1);
    show();
}

// Funksjon for å hente div etter id
function getDiv(id) {
    return document.getElementById(id);
}

function errorMsg() {
    getDiv("error-msg").innerHTML = "Feil: Du kan kun bruke en verdi mellom 1-10.";
}

// Trykk på utsiden av stolpene for å avvelge
addEventListener("click", function(e) {
    if (e.target.tagName != "rect" && e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        chosenBar = "";
        show();
    }
})