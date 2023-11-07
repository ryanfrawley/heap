# heap
A high-performance heap implementation that supports a user-defined priority function

## About
The Heap class in this library allows you to use any primitive or complex type, as long as you can map a number priority to any given item.

## Usage
1. Constructs a min-heap:
```
const heap = new Heap<number>(n => n);
```
Note: for a max-heap, pass this lambda to the Heap constructor: `n => -n`.

3. Push items onto the heap:
```
heap.push(5);
heap.push(6);
heap.push(1);
```
3. Pop items in ascending order:
```
heap.pop(); // 1
heap.pop(); // 5
heap.pop(); // 6
```
4. Access the heap data:
```
heap.array(); // []
```
