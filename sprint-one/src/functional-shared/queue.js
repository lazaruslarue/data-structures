var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
    var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[length++] = value;

  };

  instance.dequeue = function(){
    length && length--;
    var temp = storage[0];
    delete storage[0];
    _.each(storage, function(val, key){
      var newKey = key-1;
      if (newKey > -1) {
        storage[newKey] = val;
      }
    });
    return temp;
  };

  instance.size = function(){
    return length;
  };

  return instance;
};

var queueMethods = {

};


// var temp = this.storage[0];
//     delete this.storage[0];
//     _.each(this.storage, function(v,k) {
//       var newKey = k-1;
//       if (newKey > -1) {
//         this.storage[newKey] = v;
//       }
//     });
//     return temp;