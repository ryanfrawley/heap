type CompareFunc<T> = (a: T, b: T) => number; // should return a - b < 0 for min-heap, a - b > 0 for max-heap

export class Heap<T = number> {
  private data: T[] = [];
  private compare: CompareFunc<T>;

  constructor(compare: CompareFunc<T>) {
    this.compare = compare;
  }

  peek(): T | undefined {
    return this.data.length ? this.data[0] : undefined;
  }

  array() {
    return this.data;
  }

  push(item: T) {
    this.data.push(item);
    let child = this.data.length - 1;
    while (child > 0) {
      const parent = Math.floor((child + 1) / 2) - 1;
      if (this.compare(this.data[child], this.data[parent]) > 0) {
        break;
      }
      this.data[child] = this.data[parent];
      this.data[parent] = item;
      child = parent;
    }
  }

  pop(): T | undefined {
    const result = this.peek();
    if (result === undefined) return;
    let parent = 0;
    this.data[0] = this.data[this.data.length - 1];
    while (parent < this.data.length - 2) {
      const left = parent * 2 + 1;
      const right = parent * 2 + 2;
      const child = right === this.data.length ||
          this.compare(this.data[left], this.data[right]) < 0
        ? left
        : right;
      if (this.compare(this.data[child], this.data[parent]) < 0) {
        const temp = this.data[parent];
        this.data[parent] = this.data[child];
        this.data[child] = temp;
        parent = child;
      } else {
        break;
      }
    }
    this.data.pop();
    return result;
  }
}
