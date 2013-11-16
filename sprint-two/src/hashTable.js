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
  var result = [k, v];
  this._storage.set(i, result);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storeIndex = this._storage.get(i);
  // if (storeIndex.length > 1) 
  for (var j = 0; j < storeIndex.length ; j++) {
    if (storeIndex[j] === k) {
      return storeIndex[j];
    } else {
      return "get outta here";
    }
  }
};

HashTable.prototype.remove = function(){
};



// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
