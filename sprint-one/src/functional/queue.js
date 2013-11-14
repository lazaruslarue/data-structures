var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    length++;
  };

  instance.dequeue = function(){
    length--;
  };

  instance.size = function(){
    return length;
  };

  return instance;
};
