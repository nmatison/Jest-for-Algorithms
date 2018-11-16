class Vertex {

  constructor(value) {
    this.value = value;
    this.in_edges = [];
    this.out_edges = [];
  };
};

class Edge {

  constructor(from_vertex, to_vertex, cost = 1) {
    this.cost = cost;
    this.from_vertex = from_vertex;
    this.to_vertex = to_vertex;
    this.handleEdges()
  };

  handleEdges() {
    this.from_vertex.out_edges.push(this);
    this.to_vertex.in_edges.push(this);
  };

  destroy() {
    let newOutEdges = [];
    let newInEdges = [];
    for(let i = 0; i < this.from_vertex.out_edges.length; i++) {
      if (this.from_vertex.out_edges[i] !== this ) {
        newOutEdges.push(this.from_vertex.out_edges[i]);
      }
    };

    for(let i = 0; i < this.to_vertex.in_edges.length; i++) {
      if (this.to_vertex.in_edges[i] !== this ) {
        newInEdges.push(this.to_vertex.in_edges[i]);
      }
    };

    this.from_vertex.out_edges = newOutEdges;
    this.to_vertex.in_edges = newInEdges;
    this.from_vertex = null;
    this.to_vertex = null;
  };
};
  

module.exports = {
  Vertex: Vertex,
  Edge: Edge
}