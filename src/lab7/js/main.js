// Set 21-color scheme https://www.r-bloggers.com/2013/02/the-paul-tol-21-color-salute/
const color = d3.scaleOrdinal([
  "#771155", "#AA4488", "#CC99BB", "#114477", "#4477AA", "#77AADD", "#117777", 
  "#44AAAA", "#77CCCC", "#117744", "#44AA77", "#88CCAA", "#777711", "#AAAA44", 
  "#DDDD77", "#774411", "#AA7744", "#DDAA77", "#771122", "#AA4455", "#DD7788"])

d3.json("/src/lab7/data/data.json").then(graph => {
  const {nodes, links} = graph;

  // I have already implemented the color legend.
  createColorLegend(nodes);

  // In this tutorial, we will implement node-link diagram
  plotNodeLink(nodes, links);
  // and tree map.
  plotTreeMap(nodes);

});

const createColorLegend = function(nodes) {
  let sections = d3.nest()
    .key(d => d['Section ID'])
    .rollup(d => d[0]['Section'])
  .entries(nodes);

  sections = sections.sort((a, b) => d3.ascending(+a.key, +b.key))

  const legend = d3.select("#legend")
    .style("font-family", "sans-serif")
    .style("font-size", "10px");

  legend.selectAll("div")
    .data(sections)
    .join("div")
      .attr('class', 'swatches-item')
      .html(d => `<div class="swatches-swatch" style="background: ${color(+d.key - 1)};"></div>
        <div class="swatches-label">${d.value}</div>`);
}

const plotNodeLink = function(nodes, links) {
  const width = 1600, height = 800;

  const svg = d3.select("#network")
    .append("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // 1. Construct the forces and simulate for node positions
  // Ref: https://www.d3indepth.com/force-layout/ and https://github.com/d3/d3-force
  const simulation = d3.forceSimulation(nodes)
    .force("node", d3.forceManyBody().strength(-20))
    .force("link", d3.forceLink(links).id(d => d.id))
	.force("center", d3.forceCenter())

	console.groupCollapsed("Simulation");
	console.log(simulation);
	console.groupEnd();
  // 2. Add links to the SVG canvas
  const link = 
  

  // 3. Add nodes to the SVG canvas
  

  // 4. Add a tooltip for each node
  /*node.append("title").text(d => `${d.HS4}\n` + 
    `${d3.format("$,")(d['Trade Value'])} | ` +
    `RCA: ${d3.format(".2f")(d['Trade Value RCA'])}`);*/

  // 5. Update the position of nodes and edges during the simulation
  function ticked() {
    
  }

  // 6. Adjust the position when users drag a node
  // Ref: https://observablehq.com/collection/@d3/d3-drag and https://github.com/d3/d3-drag
  function drag(simulation) {    
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
}

const plotTreeMap = function(nodes) {
  const width = 1500, height = 800;

  const svg = d3.select("#treemap")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px");

  // 1. Transform the node data to hierarcical format
  // Ref: d3.group, d3.rollup, d3.index https://observablehq.com/@d3/d3-group
  

  // 2. Create the hierarchical layout with d3.hierarchy
  // Ref: d3.hierarchy https://github.com/d3/d3-hierarchy/blob/main/README.md#hierarchy
  

  // 3. Compute the treemap layout
  // Ref: https://github.com/d3/d3-hierarchy/blob/main/README.md#tree
  

  // 4. Add leave nodes to the SVG element
  

  // 5. Add the tooltip to each node
  //node.append("title").text(d => `${d.data.HS4}\n${d3.format("$,")(d.value)}`);

  // 6. Add text to each node
  /*node.append("clipPath")
        .attr("id", (d, i) => `clip-${i}`)
      .append("rect")
       .attr("width", d => d.x1 - d.x0)
       .attr("height", d => d.y1 - d.y0)

  node.append("text")
       .attr("clip-path", (d, i) => `url(#clip-${i})`)
       .html(d => d.value >= 500000000 ? `<tspan x=5 y=15 font-weight="bold">${d.data.HS4}</tspan>
                   <tspan x=5 y=30 fill-opacity=0.7>${d3.format("$.3s")(d.value)}</tspan>` : ``)*/
}
