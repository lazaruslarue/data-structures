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
  // value = makeTree(value);
  return this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  //debugger;
  if (this.value === value) {
    console.log('return true');
    return true;
  } else if (this.children.length) {
    for (var c = 0; c < this.children.length ; c++) {
      console.log('start iterating');
      var result = this.children[c].contains(value);
      if (result) {
        return true;
      }
    }
  }
  return false;
};