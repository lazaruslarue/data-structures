var makeTree = function(value){
  var newTree = {};
  newTree.value = value || undefined;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  return this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  if (this.value === value) {
    return true;
  } else if (this.children.length) {
    for (var c = 0; c < this.children.length ; c++) {
      var result = this.children[c].contains(value);
      if (result) {
        return true;
      }
    }
  }
  return false;
};