var LL = require('./ll');

LL.prototype.removeDuplicates = function(target){
  var target = target || this.head;
  var current = target;
  
  if (target.next == null || current === null){ //empty list or end of list
    return this;
  } 
  // go through list and delete all other instances of target
  while(current && current.next !== null){
    
    if (current.next && current.next.val === target.val){
      current.next = current.next.next; //if match delete
    }
      
      current = current.next;
  }
  
  //increment target
  target = target.next;
  return this.removeDuplicates(target);
  
}

module.exports = LL;