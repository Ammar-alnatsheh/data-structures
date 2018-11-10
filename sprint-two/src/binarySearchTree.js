var BinarySearchTree = function(value) {
  
  var bst = Object.create(bstMethods);

  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
  
};

var bstMethods = {};

bstMethods.insert = function(value) {
  //complexity time is O(n)
  var newBST = BinarySearchTree(value);
  
  if (value < this.value) {
    if (this.left === null) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if ( value > this.value ){
    if (this.right === null) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
  
};

bstMethods.contains = function(value) {
  //complexity time is O(n)
  if ( value === this.value ){
    return true;
    
  }
  else if ( this.left !== null && value < this.value ) {
    return this.left.contains( value );
    
  }else if ( this.right !== null && value > this.value ) {
    return this.right.contains( value );
  }
  
  return false;
  
};

bstMethods.depthFirstLog = function(value) {
  //complexity time is O(n)
  
  value(this.value);
 
  if (this.left !== null) {
    
    this.left.depthFirstLog(value);
  }
  
  if (this.right !== null) {
    
    this.right.depthFirstLog(value);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
