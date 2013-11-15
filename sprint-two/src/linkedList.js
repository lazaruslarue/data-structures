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
      this.tail.next = this.tail;
      this.tail = new makeNode(value);
    }
    // does the list have a tail?
    // if yes,
    // if yes, make list.tail = 'value'
    // else, list has no content, and make list.head = 'value'
    // make list.tail = 'value' && list.head.next = 'value'
    // does list have a head?
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
