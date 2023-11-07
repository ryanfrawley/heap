const parentNode = (n: number) => Math.floor((n + 1) / 2) - 1;
const leftNode = (n: number) => Math.floor(n * 2) + 1;
const rightNode = (n: number) => Math.floor(n * 2) + 2;

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
    let parent = parentNode(child);
    while (
      child > 0 &&
      this.priority(this.data[child]) < this.priority(this.data[parent])
    ) {
      this.data[child] = this.data[parent];
      this.data[parent] = item;
      child = parent;
    }
  }

  print() {
    let maxDepth = Math.ceil(Math.log2(this.data.length + 1));
    let index = 0;
    let str = "";
    for (let depth = maxDepth; depth > 0; depth--) {
      let line = "";
      for (let i = 0; i < Math.pow(2, maxDepth - depth); i++) {
        line += " ".repeat(Math.pow(2, depth) + depth) +
          this.data[i + index];
      }
      str += line + "\n";
      index += Math.pow(2, maxDepth - depth);
    }
    console.log(str);
  }

  array() {
    return this.data;
  }

  pop(): T | undefined {
    const result = this.peek();
    if (result === undefined) return undefined;
    let parent = 0;
    this.data[0] = this.data[this.data.length - 1];
    while (parent < this.data.length - 2) {
      const left = leftNode(parent);
      const right = rightNode(parent);
      const child = this.priority(this.data[leftNode(parent)]) <
          this.priority(this.data[rightNode(parent)])
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
