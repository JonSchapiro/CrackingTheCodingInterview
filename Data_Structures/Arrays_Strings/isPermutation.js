//use hashtable to keep references to string characters
var isPermutation = function(string1,string2){
  if (string1.length !== string2.length){ return false; }
  var charMap = {};
  var permutation = true;
  for (var i = 0; i < string1.length; i++){
    charMap[string1[i]] = charMap[string1[i]] + 1 || 1;
  }
  for (var j = 0; j < string2.length; j++){
    charMap[string2[j]]++
  }
  
  for (var char in charMap){
    if (charMap[char] % 2 !== 0){
      permutation = false;
    }
  }
  return permutation;
}

var isPermutation1 = function(string1,string2){
 //valid input
 if (typeof string1 !== 'string' || typeof string2 !== 'string') { return false;} 
 
 //for a true permutation, should be the same length
 if (string1.length !== string2.length){return false;}
 
 string1 = string1.split('');//array for easier manipulation
 string2 = string2.split('')
 
 for (var i = 0; i < string1.length; i++){
  
  for (var j= 0; j < string2.length; j++){
    
    if (string1[i] === string2[j]){
 
      string2.splice(j,1) //character in string 1 exists in string 2, remove it
      break; // in case of duplicate characters
    }
  
  }
    
 }
 if (string2.length == 0){ //if permutation should have empty array
  return true; 
  
 } else {
  return false;
 } 
 
}

//sort each string and compare
var isPermutation2 = function(string1,string2){
  
  if (string1.length !== string2.length){ return false; }
  string1 = string1.split('').sort().join();
  string2 = string2.split('').sort().join();

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}




module.exports = isPermutation;

