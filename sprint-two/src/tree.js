var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;

  newTree.addChild = treeMethods.addChild;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = [];
};

treeMethods.contains = function(){
};
