var removeNode = function(node){
	var current = node;
	if (!current.next || !current){
		return false;
	}
	current.val = current.next.val;
	current.next = current.next.next;
	
	return true;
}
