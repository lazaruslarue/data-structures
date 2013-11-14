var Queue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0;
  // Implement the methods below


  // instance.size = queueMethods.size;
  // instance.enqueue = queueMethods.enqueue;

  // instance.dequeue = queueMethods.dequeue;
};

Queue.prototype.size = function(){
    return this.length;
};
Queue.prototype.enqueue = function(value){
    this.storage[this.length++] = value;
};

Queue.prototype.dequeue = function(){
  this.length && this.length--;
  var temp = this.storage[0];
  delete this.storage[0];
  for(var k in this.storage) {
    var newKey = k-1;
    if (newKey > -1) {
      this.storage[newKey] = this.storage[k];
    }
  }
  return temp;
};
