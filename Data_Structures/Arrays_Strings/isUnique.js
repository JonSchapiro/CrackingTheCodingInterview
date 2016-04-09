var isUnique = function(string){
  if (typeof string !== 'string'){
    return false;
  }
  var duplicate = false;

  for (var i = 0; i < string.length; i++){
    for (var j = i+1; j <string.length; j++){
      if (string[i] === string[j]){
        duplicate = true;
        break;
      }
    }
  }
  return !duplicate;
} 
module.exports = isUnique;
