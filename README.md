# heap

A high-performance heap implementation that supports generic types

## API

### Heap(compare)

The Heap constructor takes in an optional template type which defaults to
`number`. You can use any primitive or complex type.

**Parameters**

`compare`: A comparison function which takes in parameters `a` and `b` and
returns any number > 0 if a > b and any number < 0 if b > a.

### Heap.push(item)

Adds a new item onto the heap.

**Parameters**

`item`: The item to insert.

### Heap.peek()

Peeks the top of the heap without removing an item.

**Returns**: the first item on the heap, or `undefined` if the heap is empty.

### Heap.pop()

Pops the top item from the queue and returns it.

**Returns**: the first item on the heap, or `undefined` if the heap is empty.

### Heap.array()

Gets the underlying heap data as an array.

**Returns**: An array containing the heap data.

## Usage

1. Constructs a number min priority queue:

```
const heap = new Heap((a, b) => a - b);
```

Note: for a numeric max priority queue, pass this compare function to the Heap
constructor: `(a, b) => b - a`.

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
