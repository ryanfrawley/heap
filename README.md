# heap

A high-performance heap implementation that supports generic types

## Usage

1. Constructs a basic min heap:

```
const heap = new MinHeap();
```

3. Push items onto the heap:

```
heap.push(5);
heap.push(6);
heap.push(1);
```

3. Pop the highest priority item:

```
heap.pop(); // 1
```

4. Iterate over the remaining items (in priority order):

```
for (const i of heap) {
  console.log(i); // 5, 6
}
```

5. Access the underlying heap data:
```
heap.array(); // []
```


## API

### Heap(compare, data?)

The Heap constructor takes in an optional template type which defaults to
`number`. You can use any primitive or complex type.

**Parameters**

`compare`: A comparison function which takes in parameters `l` and `r` and
returns `true` if `l` is a higher priority than `r`.

`data`: *(optional)* Iterable data to initialize the heap with.

### MinHeap(data?)

A superclass of Heap which provides a min heap.

**Parameters**
`data`: *(optional)* Iterable data to initialize the heap with.

### MaxHeap(data?)

A superclass of Heap which provides a max heap.

**Parameters**
`data`: *(optional)* Iterable data to initialize the heap with.

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

### Heap.top(n)

Pops *n* items off the top of the heap.

**Parameters**

`n`: The number of items to pop.

**Returns**: An array of the popped items, in order of descending priority.

### Heap.array()

Gets the underlying heap data as an array.

**Returns**: An array containing the heap data.
