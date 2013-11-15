// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if ( !this.head ) {
      this.head = new makeNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = new makeNode(value);
    }
    console.log(this.head, this.tail, this.tail.next);

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
