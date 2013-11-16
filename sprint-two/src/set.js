var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(val){
  this._storage[val] = Object.create(makeSet);
};

setPrototype.contains = function(){

};

setPrototype.remove = function(){
};
