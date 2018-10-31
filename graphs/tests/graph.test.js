const Vertex = require("../lib/graph").Vertex;
const getType = require("jest-get-type");
const Edge = require("../lib/graph").Edge;

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
      expect(testVertex.out_edges).toHaveLength(0);
    });
  });
});

describe('Edge', () => {
  let from_vertex = new Vertex(null);
  let to_vertex = new Vertex(null);
  let testEdge;

  beforeAll(() => {
    testEdge = new Edge(from_vertex, to_vertex)
  });

  describe('initialize', () => {
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
      expect(to_vertex.in_edges).toContain(testEdge)
    });

    test(`it adds itself to the from_vertex's out edges`, () => {
      expect(from_vertex.out_edges).toContain(testEdge)
    });
  });
  
  describe('destroy', () => {
    beforeAll(() => {
      testEdge.destroy()
    });

    test(`it deletes itself from its to_vertex's and from_vertex's edges`, () => {
      expect(to_vertex.in_edges).not.toContain(testEdge);
      expect(from_vertex.out_edges).not.toContain(testEdge);
    });

    test(`it sets its verticies to nil`, () => {
      expect(testEdge.from_vertex).toBeNull();
      expect(testEdge.to_vertex).toBeNull();
    });
  });
});
