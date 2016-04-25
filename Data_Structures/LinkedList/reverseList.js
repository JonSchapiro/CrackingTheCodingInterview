var LL = require('./ll');

LL.prototype.reverseList = function(node,prev){
  var current = node || this.head;
  
  if (current.next === null){ //we've reached the end of the list
    this.head = node;
    this.head.next = prev;
    return;
  }
  
  this.reverseList(current.next,current);
  if (current && current.next){
    current.next = prev;
  }
  
  return this;
}