var makeQueue = function(){
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
    _.each(storage, function(v, k) {
      var newKey = k-1;
      if (newKey > -1) {
        storage[newKey] = v;
      }
    });
    return temp;
  };

  instance.size = function(){
    return length;
  };

  return instance;
};
