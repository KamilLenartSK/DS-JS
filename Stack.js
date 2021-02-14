class ArrayStack {
  constructor() {
    this.stack = [];
    this._size = 0;
  }

  size() {
    return this._size;
  }
  isEmpty() {
    return this._size === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.size() - 1];
    }
  }
  pop() {
    this._size--;
    return this.stack.pop();
  }

  push(element) {
    this._size++;
    this.stack.push(element);
  }
}

export default ArrayStack;
