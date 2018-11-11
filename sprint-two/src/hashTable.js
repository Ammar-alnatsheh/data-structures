

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //complexity time is O(n)
  if (this._counter / this._limit >= 0.75) {

    var tempStorage = [];
    
    //iterate through old hashTable and insert each tuple to a temp storage
    for (var i = 0; i < this._limit; i++) {
      var oldbuckets = this._storage.get(i);
      if ( oldbuckets !== undefined ){
        // we have tuples
        oldbuckets.forEach(function(tuple){
          tempStorage.push(tuple);
        });
      }
    }
  
    // need to double the hash table limit size
    this._limit = this._limit * 2;    
    //double the storage
    this._storage = LimitedArray(this._limit);
    
    this._counter = 0;
    
    var hashTable = this;
    
    tempStorage.forEach(function(tuple) {
      hashTable.insert(...tuple);
    });
    
  }
  
  
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
  
  this._counter ++;
  
  
  
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
    
  this._counter --;
  
  if ( (this._counter / this._limit <= 0.25) && (this._limit > 8) ) {

  var tempStorage = [];
  
  //iterate through old hashTable and insert each tuple to a temp storage
  for (var i = 0; i < this._limit; i++) {
    var oldbuckets = this._storage.get(i);
    if ( oldbuckets !== undefined ){
      // we have tuples
      oldbuckets.forEach(function(tuple){
        tempStorage.push(tuple);
      });
    }
  }
 
  // need to double the hash table limit size
  this._limit = this._limit / 2;    
  //double the storage
  this._storage = LimitedArray(this._limit);
  
  this._counter = 0;
  
  var hashTable = this;
  
  tempStorage.forEach(function(tuple) {
    hashTable.insert(...tuple);
  });
  
}

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

