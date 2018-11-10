

// Instantiate a new graph
var Graph = function() {
   this.value = [];
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create a new node
  //complexity time is O(n)
  if (!this.contains(node)){
    this.value.push(node);
  }
  
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //complexity time is O(1)
  return this.value.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //complexity time is O(n)
  //find the index of that node
  var index = this.value.indexOf(node);
  this.value.splice(index,1);
  
  for( var i = 0; i < this.edge.length; i++) {
    
    if( this.edge[i][0] === node || this.edge[i][1] === node) {
      this.edge.splice(i,1);
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //complexity time is O(n)
  
  for( var i = 0; i < this.edge.length; i++) {
    
    if( this.edge[i][0] === fromNode && this.edge[i][1] === toNode) {
      return true;
    }
    if( this.edge[i][1] === fromNode && this.edge[i][0] === toNode) {
      return true;
    }
    
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //complexity time is O(1)
  var target = [fromNode, toNode];
  this.edge.push(target);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //complexity time is O(n)
    for( var i = 0; i < this.edge.length; i++) {
    
    if( this.edge[i][0] === fromNode && this.edge[i][1] === toNode) {
      this.edge.splice(i,1);
      break;
    }
    
    if( this.edge[i][1] === fromNode && this.edge[i][0] === toNode) {
      this.edge.splice(i,1);
      break;
    }
    
  }
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //complexity time is O(n)
  this.value.forEach(cb);
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


