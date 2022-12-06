/* Set the time format
  Ref: https://github.com/d3/d3-time-format */
const parseTime = d3.timeParse("%Y");
console.log(parseTime("2020"));

/* Load the dataset and formatting variables
  Ref: https://www.d3indepth.com/requests/ */
d3.csv("/src/lab5/data/data.csv", d => {
  return {
    'geo': d.geo,
    'country': d.country,
    'year': +d.year,
    'value': +d.value
  }
}).then(data => {
  // Print out the data on the console
  console.log(data);

  /* Data Manipulation in D3 
    Ref: https://observablehq.com/@d3/d3-extent?collection=@d3/d3-array */

  // Get the minimum and maximum of the percent pay gap
  console.log(d3.min(data, d => d.value));
  console.log(d3.max(data, d => d.value));
  console.log(d3.extent(data, d => d.value));

  // Filter the data from the year 2020
  const newData = data.filter(d => d.year === 2020);
  console.log(newData);

  // Sort the country by the percentage in the descending order
  /*console.log(newData.sort((a, b) => d3.ascending(a.value, b.value)));
  console.log(newData.sort((a, b) => d3.descending(a.value, b.value)));
  console.log(newData);*/

  // Get the mean and median of gender gap percentage
  console.log(d3.mean(newData, d => d.value));
  console.log(d3.median(newData, d => d.value));

  // Move the color scale here to share with both charts
  

  // Plot the bar chart
  createBarChart(newData);

  // Plot the line chart
  createLineChart(data);
})

const createBarChart = (data) => {
  /* Set the dimensions and margins of the graph
    Ref: https://observablehq.com/@d3/margin-convention */
  const width = 900, height = 400;
  const margins = {top: 20, right: 40, bottom: 30, left: 40};

  /* Create the SVG container */
  const svg = d3.select("#bar")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

  /* Define x-axis, y-axis, and color scales
    Ref: https://observablehq.com/@d3/introduction-to-d3s-scales */
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.country))
    .range([margins.left, width-margins.right])
    .paddingInner(0.2);

  console.log(xScale("France"));
  console.log(xScale("Austria"));
  console.log(xScale.bandwidth());
  console.log(xScale.step());

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height-margins.bottom, margins.top])

  console.log("Here!")
  console.log(yScale(0));
  console.log(yScale(20));

  /* Working with Color: https://observablehq.com/@d3/working-with-color
    Color schemes: https://observablehq.com/@d3/color-schemes 
    d3-scale-chromatic: https://github.com/d3/d3-scale-chromatic */
  

  /* Create the bar elements and append to the SVG group
    Ref: https://observablehq.com/@d3/bar-chart */
  svg.append("g")
    .attr("class", "bars")
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", d => xScale(d.country))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => yScale(0) - yScale(d.value))
      .attr("fill", "lightgrey");

  /* Add the tooltip when hover on the bar */
  
  
  /* Create the x and y axes and append them to the chart
    Ref: https://www.d3indepth.com/axes/ and https://github.com/d3/d3-axis */
  
}

const createLineChart = (data, colors) => {
  /* Set the dimensions and margins of the graph */
  

  /* Create the SVG container */
  

  /* Define x-axis, y-axis, and color scales */
  

  /* Construct a line generator
    Ref: https://observablehq.com/@d3/line-chart and https://github.com/d3/d3-shape */
  

  /* Group the data for each country
    Ref: https://observablehq.com/@d3/d3-group */
  

  /* Create line paths for each country */
  

  /* Add the tooltip when hover on the line */
  

  /* Create the x and y axes and append them to the chart */


  /* Add text labels on the right of the chart */
  
}