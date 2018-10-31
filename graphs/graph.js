class Vertex {

  constructor(value) {
    this.value = value;
    this.in_edges = [];
    this.out_edges = [];
  }
}

module.exports = {
  Vertex: Vertex
}