anychart.onDocumentReady(function () {
    data = [];
    dataSet = anychart.data.set(data);
    let valueMapper = dataSet.mapAs({x: 0, value: 1, fill: 2, stroke: 2});
    let chart = anychart.column();
    chart.column(valueMapper);
    chart.container("chart");
    chart.draw();
});
let columnCounter = 1;
function submit() {
    let stringReader = document.querySelector('.findInfo').value;
    let unformattedString = stringReader.split(' ');
    let array = [];
    for (let i = 0; i < unformattedString.length; i++) {
        array[i] = parseInt(unformattedString[i]);
        let value = array[i];
        let name = "Column #" + columnCounter;
        columnCounter++;
        let dataToChart = [name, value];
        dataSet.append(dataToChart);
    }
}
