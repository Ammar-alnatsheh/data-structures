describe('DoubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = new DoubledLinedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead", "removeTail", and "contains"', function() {
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
  });

  it('should designate a new head when new nodes are added', function() {
    doubleLinkedList.addToHead(4);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.addToHead(5);
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToHead(5);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doubleLinkedList.addToHead(4);
    expect(doubleLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToHead(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToHead(5);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });
  
  it('should have last node pointing only to the previous node and first node pointing only to the next node', function() {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToHead(5);
    doubleLinkedList.addToHead(6);
    doubleLinkedList.addToHead(7);
    expect(doubleLinkedList.tail.next).to.equal(null);
    expect(doubleLinkedList.head.previous).to.equal(null);
  });

  // add more tests here to test the functionality of linkedList
});
