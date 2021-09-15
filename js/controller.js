// controller

// Funksjon for å velge og avvelge stolpe ved å trykke på den
function selectBar(index) {
    if (chosenBar === index) {
        chosenBar = null;
        show();
    } else {
        chosenBar = index;
        show();
    }
}

// Onclick funksjon for å legge til en ny stolpe
function addBar() {
    error = inputValue <= 10 && inputValue >= 1 ? numbers.push(inputValue) && false : true;
    inputValue = false;
    show();
}

// Onclick funksjon for å endre valgt stolpe
function editBar(barNumber) {
    error = inputValue <= 10 && inputValue >= 1 ? numbers.splice(barNumber - 1, 1, inputValue) && false : true;
    inputValue = false;
    show();
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

// Her ønsket jeg bare å legge til en valgfri funksjon for å kunne trykke på utsiden av stolpene for å fjerne markering
// Først sjekk om man er på index-siden, har valgt en stolpe fra før, trykker på en stolpe, input eller knapp - hvis ikke, avvelg stolpe
addEventListener("click", function (e) {
    let page = window.location.pathname;
    let pageName = page.replace('/', '').replace(".html", "");
    if (pageName === 'index' && chosenBar != "ingen" && e.target.tagName != "rect" && e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        chosenBar = "";
        show();
    }
})