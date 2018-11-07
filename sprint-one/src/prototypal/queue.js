var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var newQueue = Object.create(queueMethods);
  
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last = 0;
  
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.last ++;
  this.storage[this.last] = value;
};

queueMethods.dequeue = function() {
  if ( (this.last - this.first) > 0 ) {
    this.first ++;
    return this.storage[this.first];
  }
};

queueMethods.size = function() {
  return this.last - this.first;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

