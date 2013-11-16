var makeTree = function(value){
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

treeMethods.contains = function(value){
  if (this.value === value) {
    console.log('this is the value you are looking for');
    return true;
  } else if (this.children.length === 0) {
    console.log('no children');
    return false;
  } else {
    console.log('all else failed!');
    for (var c = 0; c < this.children.length ; c++) {
      console.log('start iterating');
      if (this.children[c].value === value) {
        return true;
      } else {
        return this.children[c].contains(value);
      }
    }
  }
};