var Tree = function(value) {
  //complexity time is O(1)
  var newTree = {};
  newTree.value = value;

  // add the addChild and contain methods to tree
  //using function shared concept
  extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //complexity time is O(1)
  // create a new node 'tree object'
  // assign the value for the new node
  // push the new node in the children array
  // assign this as a parent to the new node

  var newNode = Tree(value);
  this.children.push(newNode);
  newNode.parent = this;

};

treeMethods.parent = function() {
  //complexity time is O(1)
  // return the parent value
  return this.parent;

};

treeMethods.removeFromParent = function() {
  //complexity time is O(1)
  //disassociates the tree with its parent (in both directions)
  if ( this.parent !== null ) {
    // this tree is not the root
    var sibling = this.parent.children;
    var idx = sibling.indexOf(this);
    sibling.splice(idx,1);
  }

  this.parent = null;
  return this;

};

treeMethods.contains = function(target) {
  //complexity time is O(n)
  //Using BFS technique to visit every node in the tree
  //using recursion

  if (this.value === target) {
    return true;

  } else if (this.children.length === 0) {
    // node is a leaf
    return false;

  } else {
    //iterate through children
    for (var i = 0; i < this.children.length; i++) {
      var exist =  this.children[i].contains(target);
      if(exist){
        return true;
      }
    }
    return false;
  }

};

var extend = function(to, from) {
  //complexity time is O(n)
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
