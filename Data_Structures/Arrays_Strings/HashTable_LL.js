var HashTable = function(size){
  var _list = [];
  this.size = size || 0;

  HashTable.prototype.insert = function(val){
    //retrieve index via hashing function for value
    var index = this.hash(val,this.size);
    //check if index contains LL
    var bucket = _list[index];
    //if not create new linked list with val being the head of the list
    if (!bucket){
    
      _list[index] = new Node(val);
    
    } else {
      
      var current = _list[index]; //first node in bucket
      
      if (current.value == val){ //node exists
        return;
      }

      while(current.next){ //another value exists in the LL
       
        current = current.next; //traverse ll
        
        if (current.value == val){ //collision
          console.log('collision')
          return;
        }

      }

      current.next = new Node(val); //set the tail of the list to equal the new value
    }
    
  }

  HashTable.prototype.getList = function(){
    return _list;
  }

}

HashTable.prototype.hash = function(str,max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }

   return hash % max;
}

//Node of Linked List
var Node = function(val){
  this.value = val;
  this.next = null;
}

module.exports = HashTable;
