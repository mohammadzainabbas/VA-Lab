/* Set the time format
  Ref: https://github.com/d3/d3-time-format */

/* Load the dataset and formatting variables
  Ref: https://www.d3indepth.com/requests/ */
d3.csv(`/src/lab4/data/data.csv`, d3.autoType).then(data => {
  // Print out the data on the console
  console.table(data);

  /* Data Manipulation in D3 
    Ref: https://observablehq.com/@d3/d3-extent?collection=@d3/d3-array */

  // Get the minimum and maximum of the percent pay gap
  const minPayGap = d3.min(data, d => d.value);
  const maxPayGap = d3.max(data, d => d.value);

  console.log(`Min pay gap: ${minPayGap}`);
  console.log(`Max pay gap: ${maxPayGap}`);


  // Filter the data from the year 2020
  

  // Sort the country by the percentage in the descending order
  

  // Get the mean and median of gender gap percentage
  

  // Move the color scale here to share with both charts
  

  // Plot the bar chart
  createBarChart(data);

  // Plot the line chart
  createLineChart(data);
})

const createBarChart = (data) => {
  /* Set the dimensions and margins of the graph
    Ref: https://observablehq.com/@d3/margin-convention */
  

  /* Create the SVG container */
  

  /* Define x-axis, y-axis, and color scales
    Ref: https://observablehq.com/@d3/introduction-to-d3s-scales */
  

  /* Working with Color: https://observablehq.com/@d3/working-with-color 
    d3-scale-chromatic: https://github.com/d3/d3-scale-chromatic */
  

  /* Create the bar elements and append to the SVG group
    Ref: https://observablehq.com/@d3/bar-chart */
  

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