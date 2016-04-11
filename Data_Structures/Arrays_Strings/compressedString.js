/*
  Lessons learned: Why use an array when you can use a string?
  for each new char in the string append it to a new compressed sting
*/

var compressedString = function(s){
  if (typeof s !== 'string'){
    return '';
  }
  var streak = 0;
  var compressedList = [];
  for (var i = 0; i < s.length; i++){
    if (nextCharUnique(s[i],s[i+1])){
      streak++;
      compressedList.push([s[i],streak]);
      streak = 0;
    } else {
      streak ++;
    }
  }
  return compressedList.map(function(compressedTuple){
      return compressedTuple[0].toString() + compressedTuple[1].toString();
  }).join('');
  
};


var nextCharUnique = function(current,next){
  if (!next || next === null){
    return true;
  }
  if (current !== next){
    return true;
  }
  
  return false;
}

module.exports = compressedString;