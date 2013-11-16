describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
    set.add('a');
    set.add('b');
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add a string to set", function() {
    expect(set._storage['a']).toEqual(true);
    expect(set._storage['b']).toEqual(true);
  });
  it("should search the set to find matching value", function() {
    expect(set.contains('a')).toEqual(true);
    expect(set.contains('b')).toEqual(true);
    expect(set.contains('c')).toEqual(false);
  });

  it("should remove values when we say so", function() {
    set.remove('a');
    expect(set.contains('a')).toEqual(false);
  });
});