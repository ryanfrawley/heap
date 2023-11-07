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
