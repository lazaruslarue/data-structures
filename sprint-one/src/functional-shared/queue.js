var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
    var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0;
  // Implement the methods below


  instance.size = queueMethods.size;
  instance.enqueue = queueMethods.enqueue;

  instance.dequeue = queueMethods.dequeue;


  return instance;
};

var queueMethods = {
  size: function(){
    return this.length;
  },

  enqueue: function(value){
    this.storage[this.length++] = value;
  },

  dequeue: function(){
    this.length && this.length--;
    var temp = this.storage[0];
    delete this.storage[0];
    _.each(this.storage, function(val, key){
      var newKey = key-1;
      if (newKey > -1) {
        this.storage[newKey] = val;
      }
    });
    return temp;
  }

};

