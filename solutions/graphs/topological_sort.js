const Vertex = require("../lib/graph").Vertex;
const Edge = require("../lib/graph").Edge;

// Kahn's Algorithm with destroying the edges.
const topologicalSort = function(vertices) {
  let result = [];
  let queue = [];
  for(let i = 0; i < vertices.length; i++) {
    if (vertices[i].in_edges.length === 0) queue.push(vertices[i]);
  };

  while(queue.length != 0) {
    let popped = queue.shift();
    // You need to duplicate the out edges since we will be iterating over them
    // and destroying them at the same time. How does this affect the time/space complexities?
    let duped = popped.out_edges.slice(0);

    duped.forEach((edge) => {
      let destination = edge.to_vertex;
      edge.destroy();
      if (destination.in_edges.length === 0) queue.push(destination);
    });

    result.push(popped);
  };

  return result.length === vertices.length ? result : [];


}

//  Kahn's Algorithm without destroying the edges.
const topologicalSort = function(vertices) {
  // Use a counter hash to keep track of the number of in_edges per vertex rather than destroying each edge.
  // How does this make the time/space complexities different than when you destroy the edges?
  let in_edge_count = {};
  let result = [];
  let queue = [];

  for (let i = 0; i < vertices.length; i++) {
    let vertex = vertices[i];

    in_edge_count[vertex.value] = vertex.in_edges.length;
    if (in_edge_count[vertex.value] == 0) queue.push(vertex);
  }

  while (queue.length != 0) {
    let popped = queue.shift();

    popped.out_edges.forEach(edge => {
      let destination = edge.to_vertex;
      in_edge_count[destination.value] -= 1;
      if (in_edge_count[destination.value] === 0) queue.push(destination);
    });

    result.push(popped);
  }

  return result.length === vertices.length ? result : [];
};

module.exports = topologicalSort; 

