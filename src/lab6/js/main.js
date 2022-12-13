// Set the time format
const parseTime = d3.timeParse("%Y");

// Load the dataset and formatting variables
d3.csv("/src/lab6/data/data.csv", d => {
  return {
    geo: d.geo,
    country: d.country,
    year: +d.year,
    value: +d.value,
    date: parseTime(d.year)
  }
}).then(data => {
  // We need to make sure that the data are sorted correctly by country and then by year
  data = data.sort((a, b) => d3.ascending(a.country, b.country) || d3.ascending(a.year, b.year));

  // Define the color scale for countries
  const countries = Array.from(new Set(data.map(d => d.country))).sort();
  const colors = d3.scaleOrdinal()
    .domain(countries)
    .range(d3.quantize(d3.interpolateRainbow, countries.length));

  // Plot the bar chart
  createBarChart(data, colors);

  // Plot the line chart
  createLineChart(data, colors);
})

const createBarChart = (data, colors) => {
  // Set the dimensions and margins of the graph
  const width = 900, height = 400;
  const margins = {top: 10, right: 30, bottom: 80, left: 20};

  // Filter the data from the year 2020
  let newData = data.filter(data => data.year == 2020);

  // Create the SVG container
  const svg = d3.select("#bar")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  // Define x-axis, y-axis, and color scales
  const xScale = d3.scaleBand()
    .domain(newData.map(d => d.country))
    .range([margins.left, width - margins.right])
    .padding(0.2);
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(newData, d => d.value)])
    .range([height - margins.bottom, margins.top]);

  // Create the bar elements and append to the SVG group
  let bar = svg.append("g")
    .selectAll("rect")
// TODO: Add geo as id to refer to the data point
    .data(newData,d=>d.geo)
    .join("rect")
// TODO: Add geo as the class
      .attr('class',d=>d.geo)
      .attr("x", d => xScale(d.country))
      .attr("y", d => yScale(d.value))
      .attr("height", d => yScale(0) - yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("fill", d => colors(d.country));

// TODO: 2.1 Add event listener to each bar
  bar.on("mouseover", function() {
    // 2.2 Get the geo and color of the selected bar


    // 2.3 Highlight the bar with black stroke
    

    // 2.4 Highlight the line with the color
    

    // 2.5 Make the text label visible
    
  });

  bar.on("mouseout", function() {
    // 2.6 Get the geo of the selected bar
    const geo = d3.select(this).attr('class');

    // 2.7 Change the highlight stroke in the bar back to normal
    d3.select(this).attr('stroke', 'none');

    // 2.8 Change the line color to lightgrey
    d3.select(`path.${geo}`)
    .attr('stroke', 'lightgrey')
    .attr('opacity', 0.5)

    // 2.9 Make the text label invisible again
    d3.select(`text.${geo}`).attr('visibility', 'hidden');
  });

  // Add the tooltip when hover on the bar
  bar.append('title').text(d => d.country);
  
  // Create the x and y axes and append them to the chart
  const yAxis = d3.axisLeft(yScale);

  const yGroup = svg.append("g")
      .attr("transform", `translate(${margins.left},0)`)
    .call(yAxis)
    .call(g => g.select(".domain").remove());

  const xAxis = d3.axisBottom(xScale);

  const xGroup = svg.append("g")
      .attr("transform", `translate(0,${height - margins.bottom})`)
    .call(xAxis);

  xGroup.selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");

// TODO: 1.1 Add event listener to the year slider
  d3.select("#yearSlider").on("change", function(e) {
    // Get the year selected
 


    // Update the chart
    update();
  });

// TODO: 1.2 Add event listener to the sort dropdown
  d3.select("#sort").on("change", function(e) {
    // Get the sorting option selected


    // Updte the chart
    update();
  });

// TODO: 1.3 Update the bar chart based on new inputs
  function update() {
    // 1.4 Get the selected year and sorting method
    
    const year=d3.select('#yearSlider').node().value;
    const sort=d3.select('#sort').node().value;


    // 1.5. Filter and sorting the new data
    let newData = data.filter(data => data.year == year);

    if (sort == 'alphabet') {
      newData = newData.sort((a, b) => d3.ascending(a.country, b.country));
    }
    else if (sort == 'pctAsce') {
      newData = newData.sort((a, b) => d3.ascending(a.value, b.value));
    }
    else {
      newData = newData.sort((a, b) => d3.descending(a.value, b.value));
    }

    // 1.6 Define new x and y scales
    const xScale = d3.scaleBand()
        .domain(newData.map(d => d.country))
        .range([margins.left, width - margins.right])
        .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(newData, d => d.value)])
      .range([height - margins.bottom, margins.top]);

    // 1.7. Define a transition.
    const t=d3.transition().duration(1000);
    
    // 1.8 Update the bar chart with enter, update, and exit pattern
    bar=bar.data(newData,d=>d.geo).join(
      enter=> enter.append('rect')
        .attr('class',d=>d.geo)
        .attr("x", d => xScale(d.country))
        .attr("y", d => yScale(d.value))
        .attr("height", d => yScale(0) - yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("fill", d => colors(d.country)),
      update=>update.transition(t)
        .attr("x", d => xScale(d.country))
        .attr("y", d => yScale(d.value))
        .attr("height", d => yScale(0) - yScale(d.value))
        .attr("width", xScale.bandwidth()),
      exit=>exit.transition(t)
        .attr('y',yscale(0))
        .attr('height',0)
        .remove()
      );
      
    // 1.9 Transition on the x and y axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    xGroup.transition(t)
      .call(xAxis)
      .call(g => g.selectAll(".tick"));

    xGroup.selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");

    yGroup.transition(t)
        .call(yAxis)
      .selection()
        .call(g => g.select(".domain").remove());
  }
}

const createLineChart = (data, colors) => {
  // Set the dimensions and margins of the graph
  const width = 900, height = 400;
  const margins = {top: 10, right: 100, bottom: 20, left: 20};

  // Create the SVG container
  const svg = d3.select("#line")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  // Define x-axis, y-axis, and color scales
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([margins.left, width - margins.right]);
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margins.bottom, margins.top]);

  // Construct a line generator
  const line = d3.line()
    .curve(d3.curveLinear)
    .x(d => xScale(d.date))
    .y(d => yScale(d.value));

  // Group the data for each country
// TODO: Change to group the data by geo
  const group = d3.group(data, d => d.geo);

  // Draw a line path for each country
  const path = svg.selectAll('path')
      .data(group)
      .join('path')
// TODO: Add the geo as the class
        .attr('class',([i, d]) => i)
        .attr('d', ([i, d]) => line(d))
// TODO: Change the color to lightgrey
        .style('stroke', 'lightgrey')
        // .style('stroke', ([i, d])=> colors(i))
        .style('stroke-width', 2)
        .style('fill', 'transparent')
        .style('opacity',0.5);
// TODO: Add the opacity to each line

  // Add the tooltip when hover on the line
  path.append('title').text(([i, d]) => d[0].country);

  // Create the x and y axes and append them to the chart
  const xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", `translate(0,${height - margins.bottom})`)
    .call(xAxis);

  const yAxis = d3.axisLeft(yScale);

  svg.append("g")
    .attr("transform", `translate(${margins.left},0)`)
    .call(yAxis)
    .call(g => g.select(".domain").remove());

  // Add text labels on the right of the chart
  const data2020 = data.filter(data => data.year == 2020);
  const labels = svg.selectAll('text.label')
    .data(data2020)
    .join('text')
// TODO: Add geo as the class to the text label
      .attr('x', width - margins.right + 5)
      .attr('y', d => yScale(d.value))
      .attr('dy', '0.35em')
      .style('font-family', 'sans-serif')
      .style('font-size', 12)
      .style('fill', d => colors(d.country))
    .text(d => d.country);

// TODO: Hide text labels when unselected
  labels.style('visibility','hidden');
}