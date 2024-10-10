// Sample interactive bar chart
var data1 = [{
    x: ['Feature 1', 'Feature 2', 'Feature 3'],
    y: [20, 14, 23],
    type: 'bar'
}];

Plotly.newPlot('chart1', data1);

// Sample pie chart for model performance
var data2 = [{
    values: [60, 40],
    labels: ['Correct Predictions', 'Incorrect Predictions'],
    type: 'pie'
}];

Plotly.newPlot('chart2', data2);
