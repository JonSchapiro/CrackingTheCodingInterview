var levelOrder = function(root){
  if (!root){
    return;
  }
  
  var queue = [];
  queue.push(root);
  
  while (queue.length > 0){
    
    var current = queue.shift();
    
    if (current.left){
      queue.push(current.left)
    }
    
    if (current.right){
      queue.push(current.right);
    }
  }
};

module.exports = levelOrder;