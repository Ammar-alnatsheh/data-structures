var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //complexity time is O(n)
  if ( !this.contains(item)) {
    this._storage.push(item);
  }
  
  
};

setPrototype.contains = function(item) {
  //complexity time is O(n)
  var idx = this._storage.indexOf(item);
  if( idx === -1) {
    return false;
  }
  return true;
};

setPrototype.remove = function(item) {
  //complexity time is O(n)
  var idx = this._storage.indexOf(item);
  if( idx !== -1) {
    this._storage.splice(idx,1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
