var isRotation = function(string1,string2){
 if (string1.length != string2.length){ return false;}
 var s1s1 = string1+string1;
 
 if (s1s1.includes(string2)){
    return true;
 } 
   return false;
}