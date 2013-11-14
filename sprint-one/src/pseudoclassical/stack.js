var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  //var instance = {};
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.length = 0; 

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

