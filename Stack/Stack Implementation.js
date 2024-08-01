class Stack {
  constructor(size = 0, index = -1) {
    this.stack = new Array(size);
    this.index = -1;
  }

  push(item) {
    this.index++;
    if (this.index <= this.stack.length - 1) {
      this.stack[this.index] = item;
    } else {
      console.log("Stack is overflow");
    }
  }

  pop() {
    if (this.index < 0) {
      console.log("Stack is underflow");
    } else {
      const val = (this.stack[this.index] = -1);
      this.stack[this.index] = undefined;
      this.index--;
      return val;
    }
  }

  isEmpty() {
    if (this.index > -1) {
      return false;
    } else {
      return true;
    }
  }

  peek() {
    if (this.index != -1) return this.stack[this.index];
    else return undefined;
  }

  length() {
    return this.index + 1;
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop();

console.log(stack);
console.log(stack.isEmpty());
console.log(stack.length());
