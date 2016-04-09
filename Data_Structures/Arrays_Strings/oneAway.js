/* 
  My solution works but is not the cleanest nor the fastest
  What I learned: It would be helpful to split up what it means to be oneAway into separate functions.
  For example, is one insertion away, is one replacement away, and is one deletion away.
  Based on the lengths of the strings you call one of those functions.
*/

var oneAway = function(string1,string2){
  if (typeof string1 !== 'string' || typeof string2 !== "string"){ return false; }
  var charMap = {};
  //populate char map with characters in string1
  for (var i = 0; i < string1.length; i++){
    charMap[string1[i]] = charMap[string1[i]] + 1 || 1;
  }
  //check for similarity 
  for (var j = 0; j < string2.length; j++){
    
    if (string2[j] in charMap){
      charMap[string2[j]] --;
     
    }else {
      
      charMap[string2[j]] = 1;
    }
   
  }

  //there should be at most one char in the map with a value equal to only 1
  var differences = 0; //just a flag
  for (var char in charMap){
    if (charMap[char] < -1 || charMap[char]> 1){
      return false
    } else if (charMap[char] ===1 ) {
      differences ++;
    }
  } 
  
  if (differences > 2){
    return false;
  } else {
    return true;
  }
}

module.exports = oneAway;