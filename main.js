const data = [55000, 48000, 27000, 66000, 90000];

const margin = { top: 20, right: 20, bottom: 50, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3
  .select("#vis1")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

const yAxis = d3.axisLeft(yScale);

svg.append("g").call(yAxis);

svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", (d) => yScale(d))
  .attr("r", 5);

svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", width / 2 + 10)
  .attr("y", (d) => yScale(d) - 10)
  .attr("font-size", "12px")
  .attr("font-family", "sans-serif");
