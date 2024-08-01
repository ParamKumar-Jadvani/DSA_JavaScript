class Queue {
  constructor(size = 0) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(item) {
    this.rear++;
    if (this.rear <= this.queue.length - 1) {
      this.queue[this.rear] = item;
    } else {
      console.log("Queue is overflow");
    }
  }
  dequeue() {
    if (this.front < this.rear) {
      this.queue[this.front] = null;
      this.front++;
    } else {
      console.log("Queue is underflow");
    }
  }
  isEmpty() {
    return this.front > this.rear;
  }
  size() {
    return this.rear - this.front;
  }
  front() {
    return this.queue[this.front];
  }
  rear() {
    return this.queue[this.rear];
  }
  print() {
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.queue[i]);
    }
  }
}

queue = new Queue(5);

// queue.print();
queue.enqueue(10);

queue.enqueue(20);

queue.enqueue(30);

queue.enqueue(40);

queue.enqueue(50);
// queue.print();

queue.dequeue();
// queue.print();

queue.dequeue();

// queue.print();

queue.dequeue();
queue.print();
