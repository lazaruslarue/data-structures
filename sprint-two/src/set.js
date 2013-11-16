var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(key){
  if (this._storage === undefined) {
    this._storage = {};
  }
  this._storage[key] = true;
};

setPrototype.contains = function(nam){
  if (this._storage[nam]) {
    return this._storage[nam];
  } else {
    return false;
  }
};

setPrototype.remove = function(nam){
  delete this._storage[nam];
};
