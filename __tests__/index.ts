import { Heap } from "..";

it("tests a size 0 heap", () => {
  const heap = new Heap<number>((item) => item);
  expect(heap.pop()).toBeUndefined();
});

it("tests a size 1 heap", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(5);
  expect(heap.array()).toEqual([5]);
  expect(heap.pop()).toBe(5);
  expect(heap.pop()).toBeUndefined();
});

it("tests a size 2 heap", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(5);
  heap.push(10);
  expect(heap.array()).toEqual([5, 10]);
  expect(heap.pop()).toBe(5);
  expect(heap.pop()).toBe(10);
  expect(heap.pop()).toBeUndefined();
});

it("tests a size 3 heap", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(5);
  heap.push(10);
  heap.push(3);
  expect(heap.array()).toEqual([3, 10, 5]);
  expect(heap.pop()).toBe(3);
  expect(heap.array()).toEqual([5, 10]);
  expect(heap.pop()).toBe(5);
  expect(heap.array()).toEqual([10]);
  expect(heap.pop()).toBe(10);
  expect(heap.array()).toEqual([]);
  expect(heap.pop()).toBeUndefined();
});

it("tests a size 4 heap", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(2);
  heap.push(8);
  heap.push(1);
  heap.push(3);
  expect(heap.array()).toEqual([1, 3, 2, 8]);
  expect(heap.pop()).toBe(1);
  expect(heap.array()).toEqual([2, 3, 8]);
  expect(heap.pop()).toBe(2);
  expect(heap.array()).toEqual([3, 8]);
  expect(heap.pop()).toBe(3);
  expect(heap.array()).toEqual([8]);
  expect(heap.pop()).toBe(8);
  expect(heap.array()).toEqual([]);
  expect(heap.pop()).toBeUndefined();
});

it("inserts elements into the correct positions", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(1);
  heap.push(2);
  heap.push(3);
  heap.push(4);
  heap.push(5);
  heap.push(6);
  heap.push(7);
  expect(heap.array()).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

it("inserts elements into the correct positions", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(7);
  heap.push(1);
  heap.push(5);
  heap.push(3);
  expect(heap.array()).toEqual([1, 3, 5, 7]);
});

it("inserts elements into the correct positions", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(2);
  heap.push(3);
  heap.push(1);
  heap.push(2);
  expect(heap.array()).toEqual([1, 2, 2, 3]);
});

it("pops an element and rebalances the tree correctly", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(1);
  heap.push(3);
  heap.push(2);
  heap.push(5);
  heap.push(1);
  expect(heap.array()).toEqual([1, 1, 2, 5, 3]);
});

it("pops an element and rebalances the tree correctly", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(7);
  heap.push(1);
  heap.push(5);
  heap.push(3);
  expect(heap.array()).toEqual([1, 3, 5, 7]);
  expect(heap.pop()).toEqual(1);
  expect(heap.array()).toEqual([3, 7, 5]);
});

it("pops several elements and rebalances the tree correctly", () => {
  const heap = new Heap<number>((item) => item);
  heap.push(1);
  heap.push(5);
  heap.push(7);
  heap.push(2);
  heap.push(2);
  heap.push(1);
  expect(heap.array()).toEqual([1, 2, 1, 5, 2, 7]);
  expect(heap.pop()).toEqual(1);
  expect(heap.array()).toEqual([1, 2, 7, 5, 2]);
  expect(heap.pop()).toEqual(1);
  expect(heap.array()).toEqual([2, 2, 7, 5]);
  expect(heap.pop()).toEqual(2);
  expect(heap.array()).toEqual([2, 5, 7]);
});

it("tests a large heap", () => {
  const data = [
    8011,
    8387,
    6007,
    1235,
    5595,
    138,
    3136,
    1740,
    963,
    9412,
    802,
    4475,
    9695,
    3713,
    1742,
    8559,
    2237,
    4356,
    4012,
    3449,
    990,
    6930,
    523,
    931,
    5937,
    5902,
    2817,
    4088,
    385,
    1359,
    1888,
    1106,
    416,
    670,
    347,
    6113,
    4190,
    2094,
    2575,
    3011,
    8571,
    32,
    6318,
    9658,
    708,
    4061,
    2481,
    595,
    69,
  ];
  const heap = new Heap<number>((x) => -x);
  for (const n of data) {
    heap.push(n);
  }
  expect(heap.array()).toEqual([
    9695,
    9658,
    9412,
    8387,
    8571,
    6007,
    4088,
    2237,
    6113,
    8011,
    8559,
    5937,
    5902,
    3713,
    1888,
    1235,
    1740,
    4356,
    4012,
    5595,
    6318,
    6930,
    4061,
    595,
    931,
    4475,
    2817,
    3136,
    385,
    1359,
    1742,
    1106,
    416,
    670,
    347,
    963,
    4190,
    2094,
    2575,
    3011,
    3449,
    32,
    990,
    802,
    708,
    523,
    2481,
    138,
    69,
  ]);
});
