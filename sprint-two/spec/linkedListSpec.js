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



  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
});