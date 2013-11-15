  // Note: don't use an array to do this.
  var makeLinkedList = function(){
    var list = {};

    list.head = null;
    list.tail = null;

    list.addToTail = function(value){
      if ( !this.head ) {
        this.head = makeNode(value);
        this.tail = list.head;
      } else if (!this.head.next) {
        this.head.next = makeNode(value);
        this.tail = list.head.next;
      } else {
        this.tail.next = makeNode(value);
        this.tail = this.tail.next;
      }
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