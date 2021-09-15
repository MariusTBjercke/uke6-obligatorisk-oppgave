// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    chosenBar ? disabled = "" : disabled = "disabled";
    chosenBar = chosenBar ? chosenBar : chosenBar = "ingen";
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${chosenBar}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="addBar()">Legg til stolpe</button>
        <button ${disabled} onclick="editBar(${chosenBar})">Endre valgt stolpe</button><br />
        <button ${disabled} onclick="removeBar(${chosenBar})">Fjerne valgt stolpe</button>
        `;
        if (error) {
            errorMsg();
        };
}

function errorMsg() {
    const errorDiv = document.createElement("div");
        errorDiv.innerHTML = "Feil: Kun verdi mellom 1-10.";
        errorDiv.setAttribute("id", "error-msg");
        contentDiv.appendChild(errorDiv);
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let selectedClass;
    selectedClass = barNo === chosenBar ? selectedClass = "selected" : selectedClass;
    return `<rect class="${selectedClass}" onclick="selectBar(${barNo})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}