var Stack = function() {
  this.storage = {};
  this.length = 0;
};
Stack.prototype.size = function(){
    return this.length;
};
Stack.prototype.push = function(value){
    this.storage[this.length++] = value;
};
Stack.prototype.pop = function(){
    this.length && this.length--;
    return this.storage[this.length];
};

var newStack = new Stack();
