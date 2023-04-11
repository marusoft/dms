anychart.onDocumentReady(function () {
  // set the data as an array
  // delivered last data, review first and cancelled second
  let dataSet = [
    ["8am", 0.99, 0.00, 18.09],
    ["10am", 18.23, 15.81, 30.0],
    ["12pm", 18.46, 14.12, 25.0],
    ["2pm", 18.53, 16.78, 27.0],
    ["4pm", 28, 18.0, 35.44],
    ["6pm", 30.2, 26.55, 33.0],
    ["8pm", 15.34, 0.22, 40.55],
  ];

  // create a dataset for mapping
  let orderData = anychart.data.set(dataSet);

  // create an area chart
  let chart = anychart.area();

  // map the data
  let seriesData_1 = orderData.mapAs({ x: 0, value: 3 });
  let seriesData_2 = orderData.mapAs({ x: 0, value: 1 });
  let seriesData_3 = orderData.mapAs({ x: 0, value: 2 });

  // create the second series, set the data and name
  let series1 = chart.area(seriesData_1);
  series1.name("Delivered");
  // create the first series, set the data and name
  let series2 = chart.area(seriesData_2);
  series2.name("Reviews");

  // create the second series, set the data and name
  let series3 = chart.area(seriesData_3);
  series3.name("Cancelled");

  // set the chart title
  chart.title("Orders Today");

  // set the container id for the chart
  chart.container("container");

  // initiate drawing the chart
  chart.draw();

  // get rid of the gaps to the right and left of the area.
  chart.xScale().mode("continuous");

  // vertical crosshair line of a hovered data point.
  let crosshair = chart.crosshair();
  crosshair.enabled(true).yStroke(null).xStroke("#fff");
  crosshair.yLabel().enabled(false);

  // change the color of the
  series2.fill("#90D893", 0.7).stroke("#90D893", 1);

  series3.fill("#FF3A29", 0.7).stroke("#FF3A29", 1);

  series1.fill("#DFDDFF", 0.7).stroke("#DFDDFF", 1);

  // legend
  chart.legend(true);

  // axes title
  chart.xAxis().title("Time");
  chart.yAxis().title("Order counts");
});

// bar chart

anychart.onDocumentReady(function () {
// create data
let data = [
  ["Today", 11],
  ["Yesterday", 7],
  ["01 Mar 2021", 8],
  ["02 Mar 2021", 5],
  ["03 Mar 2021", 9]
];

// create a chart
chart = anychart.bar();

// create a bar series and set the data
let series = chart.bar(data);

// set the container id
chart.container("wrapper");

// initiate drawing the chart
chart.draw();

});