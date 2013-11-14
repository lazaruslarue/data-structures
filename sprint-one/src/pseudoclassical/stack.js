var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  //var instance = {};
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  // Implement the methods below

  // instance.push = stackMethods.push;
  // instance.size = stackMethods.size;
  // instance.pop = stackMethods.pop;

  return instance;
};

var stackMethods = {
  size: function(){
    return this.length;
  },

  push: function(value){
    this.storage[this.length++] = value;
  },

  pop: function(){
    this.length && this.length--;
    return this.storage[this.length];
  }
};

