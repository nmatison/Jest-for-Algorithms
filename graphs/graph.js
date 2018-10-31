class Vertex {

  constructor(value) {
    this.value = value;
    this.in_edges = [];
    this.out_edges = [];
  }
}

class Edge {

  constructor(from_vertex, to_vertex, cost = 1) {
    this.cost = cost;
    this.from_vertex = from_vertex;
    this.to_vertex = to_vertex;
    this.handleEdges()
  }

  handleEdges() {
    this.from_vertex.out_edges.push(this);
    this.to_vertex.in_edges.push(this);
  }
}
  

module.exports = {
  Vertex: Vertex,
  Edge: Edge
}