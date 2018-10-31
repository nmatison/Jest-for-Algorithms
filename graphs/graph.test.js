const Vertex = require("./graph").Vertex;
const getType = require("jest-get-type");

describe('Vertex', () => {
  describe('initialize', () => {
    let testVertex;

    beforeAll(() => {
      testVertex = new Vertex(7)
    })

    test("it stores a value", () => {
      expect(testVertex.value).toBe(7);
    });

    test("it initially sets in_edges as an empty array", () => {
      expect(getType(testVertex.in_edges)).toBe('array');
      expect(testVertex.in_edges.length).toBe(0);
    });

    test("it initially sets out_edges as an empty array", () => {
      expect(getType(testVertex.out_edges)).toBe('array');
      expect(testVertex.out_edges.length).toBe(0);
    });
  });
});

describe('Edge', () => {
  describe('initialize', () => {
    let from_vertex = new Vertex(null);
    let to_vertex = new Vertex(null);
    let testEdge;

    beforeAll(() => {
      testEdge = new Edge(from_vertex, to_vertex)
    });

    test("it stores a from_vertex", () => {
      expect(testEdge.from_vertex).toBe(from_vertex)
    });

    test("it stores a to_vertex", () => {
      expect(testEdge.to_vertex).toBe(to_vertex)
    });

    test("it stores a cost which defaults to 1", () => {
      expect(testEdge.cost).toBe(1)
    });

    test(`it adds itself to the to_vertex's in edges`, () => {
      expect(to_vertex.in_edges[in_edges.length - 1]).toBe(testEdge)
    });

    test(`it adds itself to the from_vertex's out edges`, () => {
      expect(from_vertex.out_edges[out_edges.length - 1]).toBe(testEdge)
    });

  });
});
