type GetPriorityFunc<T> = (item: T) => number;

export class Heap<T> {
  private data: T[] = [];
  private priority: GetPriorityFunc<T>;

  constructor(priority: (item: T) => number) {
    this.priority = priority;
  }

  peek(): T | undefined {
    return this.data.length ? this.data[0] : undefined;
  }

  push(item: T) {
    this.data.push(item);
    let child = this.data.length - 1;
    while (child > 0) {
      const parent = Math.floor((child + 1) / 2) - 1;
      if (this.priority(this.data[child]) >= this.priority(this.data[parent])) {
        break;
      }
      this.data[child] = this.data[parent];
      this.data[parent] = item;
      child = parent;
    }
  }

  array() {
    return this.data;
  }

  pop(): T | undefined {
    const result = this.peek();
    if (result === undefined) return;
    let parent = 0;
    this.data[0] = this.data[this.data.length - 1];
    while (parent < this.data.length - 2) {
      const left = parent * 2 + 1;
      const right = parent * 2 + 2;
      const child = this.priority(this.data[left]) <
          this.priority(this.data[right])
        ? left
        : right;
      if (this.priority(this.data[child]) < this.priority(this.data[parent])) {
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
