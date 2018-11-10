class DoubledLinedList {
   
   constructor(){
    this.head = null;
    this.tail = null;
   }
   
   addToHead(value){
     //complexity time is O(1)
     var newNode = new DoubleLinkListNode(value);
     
     if (this.tail === null && this.head === null){
      //first node
      this.tail = newNode;
      this.head = newNode;
      
     } else {
      //chain the new node
     this.head.previous = newNode;  
     newNode.next = this.head;
     this.head = newNode;
     
     }
     
   }
   
   removeTail() {
    //complexity time is O(1)
     // return the last node incase if needed
     var lastNode = this.tail;
     
     if (lastNode.previous === null){
      //its the only node
      this.tail = null;
      this.head = null;
      
     } else {
      
      this.tail = lastNode.previous;
      this.tail.next = null;
     }

     
     return lastNode.value;
   }
   
   contains(target){
    //complexity time is O(n)
     // loop through the list to check if the node exist
     var pointer = this.head;
     
     while (pointer !== null) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
     }
     return false;
   }
   
}

class DoubleLinkListNode {
  
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;  
  }
  
}