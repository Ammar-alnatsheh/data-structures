

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //complexity time is O(n)
  if ( k === null || k === undefined ) {
    return;
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //create an tuple for key and value
  var tuple = [k, v];
  // get the whole buckets inside the storage of that index
  var buckets = this._storage.get(index);
 
  if ( buckets === undefined ){
    
    this._storage.set(index, [tuple]);
    
  } else {
    //check if the keys exist in buckets
    // if yes over write on it otherwise push new tuple
    
    var tupleIndex = -1;
    for (var i = 0; i < buckets.length; i++ ){
      
      if ( buckets[i][0] === k) {
        tupleIndex = i;
      }
    }
    
    if ( tupleIndex === -1) {
      // add the new tuple to the buckets
      buckets.push(tuple);
      
    } else {
      // replace the tuple
      this._storage.set(index, [tuple]);
    }

  }
  
};

HashTable.prototype.retrieve = function(k) {
   //complexity time is O(n)
  if ( k === null || k === undefined ) {
    return;
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get all the buckets
  var buckets = this._storage.get(index);
  
  // loop through buckets to find the value of tuple
  for (var i = 0; i < buckets.length; i++ ){
    if ( buckets[i][0] === k) {
      return buckets[i][1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
   //complexity time is O(n)
  if ( k === null || k === undefined ) {
    return;
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
    // get all the buckets
  var buckets = this._storage.get(index);
  // loop through buckets to find the value of tuple
  for (var i = 0; i < buckets.length; i++ ){
    if ( buckets[i][0] === k) {
       buckets.splice(i, 1);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

