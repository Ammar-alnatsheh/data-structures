var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // add the addChild and contain methods to tree
  //using function shared concept
  extend(newTree, treeMethods);
  
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  
  // create a new node 'tree object'
  // assign the value for the new node
  // push the new node in the children array
  
  var newNode = Tree(value);
  this.children.push(newNode);
  
  
};

treeMethods.contains = function(target) {
  //Using BFS technique to visit every node in the tree
  //using recursion
  console.log(this.value);
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
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
