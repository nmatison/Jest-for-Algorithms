const QueueWithMax = require('../lib/queue_with_max');

describe('QueueWithMax', () => {
  test('it enqueues', () => {
    let q = new QueueWithMax();
    for (let i = 0; i < 5; i++) q.enqueue(i);
    expect(q.length).toBe(5);
  })

  test('it dequeues', () => {
    let q = new QueueWithMax();
    for (let i = 0; i < 5; i++) q.enqueue(i);
    for (let i = 0; i < 5; i++) q.dequeue();
    expect(q.length).toBe(0;
  })

  test('it returns the correct max while enqueuing', () => {
    let q = new QueueWithMax();
    let arr = [1, 3, 4, 10, 9];
    for (let i = 0; i < 5; i++) {
      let currentArray = arr.slice(0, i + 1);
      let max = Math.max(...currentArray);
      q.enqueue(arr[i]);
      expect(q.max).toBe(max);
    };
  });

  test('it returns the correct max while dequeuing', () => {
    let q = new QueueWithMax();
    let arr = [1, 3, 4, 10, 9, 3, 2, 17, 5];

    for (let i = 0; i < arr.length; i++) q.enqueue(arr[i]);

    for (let i = 0; i < arr.length; i++){
      let currentArray = arr.slice(i, arr.length);
      let max = Math.max(...currentArray);
      q.dequeue();
      expect(q.max).toBe(max);
    };
  });

});