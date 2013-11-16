describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  describe("children array", function() {
    beforeEach(function() {
      tree.addChild(1);
      tree.addChild(2);
    });

    it("should have an array of children", function() {
      expect(Array.isArray(tree.children)).toEqual(true);
    });

    it("should have an array w/ length 2", function(){
      expect(tree.children.length).toEqual(2);
    });
  });

  describe("investigating the .contains method", function() {
    beforeEach(function() {
      tree.addChild('child1');
      tree.addChild('child2');
    });

    it("should iterate over all the added children", function() {
      expect(tree.contains('child1')).toEqual(true);
      expect(tree.contains('child2')).toEqual(true);
    });
  });
});