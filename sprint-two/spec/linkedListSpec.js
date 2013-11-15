describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });
/* adding to tail: */
  describe("adding to tail tests... ", function() {
    beforeEach(function() {
      linkedList.addToTail(13579);
    });

    afterEach(function() {
      linkedList = makeLinkedList();
    });

    it("head & tail shouldn't be null after adding an element", function() {
      expect(linkedList.head).not.toEqual(null);
      expect(linkedList.tail).not.toEqual(null);
    });

    it("should have the same tail & head value after adding the first element to tail", function() {
      expect(linkedList.head).toEqual(linkedList.tail);
    });

    it("should have a tail with value 13579 after addToTail on empty list", function() {
      expect(linkedList.tail.value).toEqual(13579);
    });
    describe("adding more nodes to tail test", function() {
      beforeEach(function() {
        linkedList.addToTail('second');
        linkedList.addToTail('third');
      });

      it("head.next should be second",function() {
        expect(linkedList.head.next.value).toEqual('second');
      });

      it("should have a tail with the value of 'third'", function() {
        expect(linkedList.tail.value).toEqual('third');
      });

      it("linkedList.head.next.next.value to equal 'third' ", function() {
        expect(linkedList.head.next.next.value).toEqual('third');
      });


      it("should not change the head when we add a tail to a list", function(){
        expect(linkedList.head.value).toEqual(13579);
      });
    });
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  describe("removeHead tests",function(){

    it("should return null if no nodes", function(){
      expect(linkedList.removeHead()).toBeNull();
    });

    it("should return the added node", function(){ 
      linkedList.addToTail(12345);
      expect(linkedList.removeHead()).toBe(12345);
    });

    it("should return one node, then no nodes", function(){
      linkedList.addToTail(12345);
      expect(linkedList.removeHead()).toEqual(12345);
      expect(linkedList.removeHead()).toBeNull();
    });

    it("should return nodes in order", function(){
      linkedList.addToTail(12345);
      linkedList.addToTail(54321);
      expect(linkedList.removeHead()).toEqual(12345);
      expect(linkedList.removeHead()).toEqual(54321);
    });
  });

});