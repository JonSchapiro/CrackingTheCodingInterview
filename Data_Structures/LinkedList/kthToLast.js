var nthToLast = function(node,n){
  var i = 0;
  var val;
  var recurse = function(node,n){
    if (!node) { return; } //end of list - count from the end backwards
    recurse(node.next,n);
    if (++i === n){
      val = node.val;
    }
  }
  
  recurse(node,n)
  console.log('val',val)
  return val;
  
}