

// Instantiate a new graph
var Graph = function(value) {
  this.value = value || null;
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create a new node
  this.value = node;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.value === node;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // loop through each node pointing to the given node using edge []
  for (var i = 0; i < this.edge.length; i++) {
    //delete the connection to the given node in each node i loop through
    var connectedNode = this.edge[i];
    var index = this.edge[i].indexOf(node);
    connectedNode.edge.splice(index,1);
  }
    
  //delete all the edge of the given node, let js garbage collection delete it
  this.edge = null;
  this.value = null;
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


