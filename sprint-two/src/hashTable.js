var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = [];

  if (this._storage.get(i)) {
    if (this._storage.get(i).length > 3) {
      console.log("it's too big", this);
      var bigger = this.makeLimitedArray(this._limit * 2);
      // get each stack from storage
      this._storage.each(function(stack, key, bigger) {
      // get every value in stack
        for (var i = 0; i < stack.length; i++) {
          // bigger.insert(value, value)
          bigger.insert(stack[i][0], stack[i][1]);
        }
      });
      // make storage equal to bigger
      this._storage = bigger;
    }
    result = this._storage.get(i);
    result.push([k, v]);
    this._storage.set(i, result);
  } else {
    result.push([k, v]);
    this._storage.set(i, result);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j in  this._storage.get(i)) {
    if (this._storage.get(i)[j][0] === k) {
      return this._storage.get(i)[j][1];
    }
  }
};

HashTable.prototype.remove = function(){

};



// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
