const Vertex = require("../lib/graph").Vertex;
const Edge = require("../lib/graph").Edge;
const topologicalSort = require('../lib/topological_sort');
const shuffle = require('../../src/shuffle');

describe('TopologicalSort', () => {
  let v1;
  let v2;
  let v3;
  let v4;
  let v5;
  let v6;
  let v7;
  let v8;
  let vertices = [];
  let solutions;

  beforeAll(() => {
    v1 = new Vertex("Wash Markov");
    v2 = new Vertex("Feed Markov");
    v3 = new Vertex("Dry Markov");
    v4 = new Vertex("Brush Markov");
    v5 = new Vertex("CuddleEdge");
    v6 = new Vertex("Walk Markov");
    v7 = new Vertex("Teach Markov");
    v8 = new Vertex("Worship Markov");
    solutions = [
      [v1.value, v2.value, v3.value, v4.value, v5.value, v6.value, v7.value, v8.value],
      [v1.value, v2.value, v3.value, v5.value, v4.value, v6.value, v7.value, v8.value],
      [v1.value, v3.value, v2.value, v4.value, v5.value, v6.value, v7.value, v8.value],
      [v1.value, v3.value, v2.value, v5.value, v4.value, v6.value, v7.value, v8.value]
    ];
  });

  test(`it sorts the vertices`, () => {

    vertices.push(v1, v2, v3, v4, v5, v6, v7, v8);
    new Edge(v1, v2);
    new Edge(v1, v3);
    new Edge(v2, v4);
    new Edge(v3, v4);
    new Edge(v2, v5);
    new Edge(v4, v6);
    new Edge(v5, v6);
    new Edge(v6, v7);
    new Edge(v7, v8);
    shuffle(vertices);

    let answer = topologicalSort(vertices).map((vert) => {
      return vert.value
    });

    expect(solutions).toContainEqual(answer);
   
  });

  test(`it returns [] for a cyclic or unconnected graph`, () => {

    vertices.push(v1, v2, v3, v4, v5, v6, v7, v8);
    new Edge(v1, v2);
    new Edge(v1, v3);
    new Edge(v2, v4);
    new Edge(v3, v4);
    new Edge(v2, v5);
    new Edge(v4, v6);
    new Edge(v5, v6);
    new Edge(v6, v7);
    new Edge(v7, v8);
    new Edge(v8, v2);
    shuffle(vertices);

    expect(topologicalSort(vertices).map((vert) => {
      vert.value
    })).toHaveLength(0);
  });
});

