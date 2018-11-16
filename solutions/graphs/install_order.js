const Vertex = require("../lib/graph").Vertex;
const Edge = require("../lib/graph").Edge;
const topologicalSort = require("../lib/topological_sort");

const installOrder = function(array) {
  let vertices = generateVertices(array);
  
  for(let i = 0; i < array.length; i++) {
    let from_vertex = findVertex(vertices, array[i][1]);
    let to_vertex = findVertex(vertices, array[i][0]);
    new Edge(from_vertex, to_vertex)
  };


  let sorted = topologicalSort(vertices);

  return sorted.map((vertex) => (vertex.value));
};

function findVertex(vertices, value) {
  for(let i = 0; i < vertices.length; i++) {
    if (vertices[i].value === value) return vertices[i];
  };
}

function generateVertices(array) {
  let result = [];

  for(let i = 0; i < array.length; i ++) {
    if (!result.includes(array[i][0])) result.push(array[i][0]);
    if (!result.includes(array[i][1])) result.push(array[i][1]);
  };

  for(let i = 0; i < result.length; i++) {
    result[i] = new Vertex(result[i]);
  };

  return result;
}

module.exports = installOrder;