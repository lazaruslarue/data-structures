// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
 
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

  };

  list.removeHead = function(){
    this.head = this.head.next;
  };

  list.contains = function(value){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
