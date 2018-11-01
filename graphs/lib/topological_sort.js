const Vertex = require("../lib/graph").Vertex;
const Edge = require("../lib/graph").Edge;

const topologicalSort = function(vertices) {
  let in_edge_count = {};
  let result = [];
  for(let i = 0; i < vertices.length; i++) {
    in_edge_count[vertices[i].value] = vertices[i].in_edges.length;
  };

  let queue = [];
  for(let i = 0; i < vertices.length; i++) {
    let vertex = vertices[i];
    if (in_edge_count[vertex.value] == 0) queue.push(vertex);
  };

  while (queue.length != 0) {
    let popped = queue.shift();
    popped.out_edges.forEach((edge) => {
      let destination = edge.to_vertex;
      in_edge_count[destination.value] -= 1;
      if (in_edge_count[destination.value] === 0) queue.push(destination);
    });
    result.push(popped);
  };

  return result.length === vertices.length ? result : [];
};

module.exports = topologicalSort; 
