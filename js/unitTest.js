// Dummy funksjon
function show() {}

QUnit.module("Controller funksjoner");

QUnit.test("Velge og avvelge stolpe", function(assert) {
    // Velge stolpe
    selectBar(2);
    assert.equal(chosenBar, 2, "Index-verdi er lagret i variabel.");

    // Sjekk om valgt stolpe er samme som over
    selectBar(2);
    assert.equal(chosenBar, null, "Samme index ble valgt - variabel satt til null.");
});

QUnit.test("Slette stolpe", function(assert) {
    // Sjekk om index blir slettet fra liste
    numbers = [7, 3, 1, 5, 8];
    removeBar(5);
    assert.deepEqual(numbers, [7, 3, 1, 5], "Verdi ble slettet fra liste.");
});

QUnit.test("Endre stolpe", function(assert) {
    // Endre verdi i liste til inputValue
    inputValue = 4;
    numbers = [7, 3, 1, 5, 8];
    editBar(5);
    assert.deepEqual(numbers, [7, 3, 1, 5, 4], "Verdi fra liste ble endret.");
});

QUnit.test("Legg til stolpe", function(assert) {
    // Legg til ny verdi (inputValue) i slutten av listen
    inputValue = 4;
    numbers = [7, 3, 1, 5, 8];
    addBar();
    assert.deepEqual(numbers, [7, 3, 1, 5, 8, 4], "Verdi ble lagt til i liste.");
});