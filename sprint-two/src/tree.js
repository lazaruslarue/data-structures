var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  value = makeTree();
  return this.children.push(value);
};

treeMethods.contains = function(){
};