var HashTable = function(){
  this._limit = 8;

  this._size = 0;



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
  var bucket = this._storage.get(i) || []; // yaya! here's a thing that points to the thing

  if (this._storage.get(i)) {
    if (this._storage.get(i).length > 3) {
      console.log("it's too big", this);
      this.resize(this._limit * 2);
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
  var bucket = this._storage.get(i) || [];
  for (var j in  bucket) {
    var pair = bucket[j]
    if (pair[0] === k) {
      return v;
    }
  }
  return null; // needs to be here
};

HashTable.prototype.remove = function(k){
  // splice is helpful here
};

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  var this._limit = makeLimitedArray(newLimit);
  
  var bigger = new makeLimitedArray(this._limit * 2);
    this._storage.each(function(stack, key, bigger) {
      for (var i = 0; i < stack.length; i++) {
        bigger.insert(stack[i][0], stack[i][1]);
      }
    });
  
};



// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
