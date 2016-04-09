var HashTable = function(){
  var _list = [];//underlying data structure

}


var BinaryTree = function(){
  var _root = null; // should not be able to directly access the root

  BinaryTree.prototype.add = function(val){
    if (!_root){ //tree is empty
      _root = new Leaf(val);
    } else { 
      var currentLeaf = _root;
      while(currentLeaf){
        if (val <= currentLeaf.val){ //go left
            if (currentLeaf.left === null){
              currentLeaf.left = new Leaf(val);
            } else {
              currentLeaf = currentLeaf.left;
            }
            
        } else { // go right
          if (currentLeaf.right === null){
            currentLeaf.right = new Leaf(val);
          } else {
            currentLeaf = currentLeaf.right;
          }
        }
      }
    }
  }

  BinaryTree.prototype.contains = function(val,node){
    if (node.val === val){
      return true;
    }
   
    
  }
}


var Leaf = function(){
  this.val = val;
  this.left = null;
  this.right = null;
}