var zeroMatrix = function(matrix){
  var zeroMap = [];
  //loop through entire matrix
  var matrixLength = matrix.length;
  for (var i = 0; i < matrixLength; i++){
    
    for (var j = 0; j < matrixLength; j++){
      //if zero found and row and col has not already been zeroed
      if (matrix[i][j] === 0 && !alreadyZeroed(zeroMap,i,j)){
        //zero out that row and column
        matrix = clearRowAndColumn(matrix,i,j); 
        zeroMap.push([i,j]) // add the row and col to zero map
      }
    }
  }
  //printMatrix(matrix)
  return matrix;
}

//clears row and colum with zeroes
var clearRowAndColumn = function(matrix,row,column){
  var count = matrix.length-1; 
  
  while (count >= 0){
    matrix[row][count] = 0;
    matrix[count][column] = 0;
    count --;
  }
  
  return matrix;
}

//checks zeroMap to see if a row or column has already been zeroed
var alreadyZeroed = function(map,row,column){
  var exists = false;
  if (map.length < 1){return false;}
  for (var i = 0; i < map.length; i++){
    
    if (map[i][0] === row || map[i][1] === column){
      exists = true;
      break;
    }
  }
  return exists;
}

//helper to print matrix
var printMatrix = function(matrix){
  for (var i = 0; i < matrix.length; i ++ ){
    for (var j = 0; j < matrix.length; j++){
      process.stdout.write(matrix[i][j].toString())
    }
    console.log('')
  }
}



module.exports = zeroMatrix;