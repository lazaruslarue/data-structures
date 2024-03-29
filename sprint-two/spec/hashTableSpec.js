describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    console.log(getIndexBelowMaxForKey('val1', 10));
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
  it("shouldn't ever fill up", function() {
    
    for (var i = 0; i < 1000; i++) {
      hashTable.insert(i , i);
    }
    for (var j = 0; j < 1000; j++) {
      console.log(j);
      expect(hashTable.retrieve(j)).toEqual(j);
      console.log(hashTable.retrieve(j));
    }
  });

});
