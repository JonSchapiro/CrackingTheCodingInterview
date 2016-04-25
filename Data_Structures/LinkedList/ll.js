// LL - source of truth
var LinkedList = function(){
  this.head = null; 
};

//insert single node
LinkedList.prototype.insert = function(val){
  //insert new node at tail of LL
  var current = this.head;
  
  if (current == null){ //list is empty
    this.head = new Node(val);
  } else {
    
    while (current.next){
      current = current.next; 
    }
    current.next = new Node(val);
  }
};

//remove single node
LinkedList.prototype.remove = function(val){
  //locate value and remove it from list
  var current = this.head;
  if (current.val == val){ //val is head of list
    if (current.next){
      this.head = current.next;
      
    }else {
      this.head = null
    }
    
  } else {
    while(current.next){
      if (current.next.val == val){
        //delete node
        current.next = current.next.next;
        return
      } else {
        current = current.next;
      }
      
    }
  }
}
//Nodes in the LL
var Node = function(val){
  this.val = val;
  this.next = null;
};

module.exports = LinkedList;