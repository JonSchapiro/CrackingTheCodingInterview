var removeZeroesFromMatrix = function(matrix){
  var zeroMap = [];
  //loop through entire matrix
  var matrixLength = matrix.length;
  for (var i = 0; i < matrixLength; i++){
    
    for (var j = 0; j < matrixLength; j++){
      //if zero found and row and col has not already been zeroed
      if (matrix[i][j] === 0 && !alreadyZeroed(zeroMap,i,j)){
        //zero out that row and column
        console.log('zero found', i,j)
        matrix = clearRowAndColumn(matrix,i,j); 
        zeroMap.push([i,j])
      }
    }
  }
  printMatrix(matrix)
  return matrix;
}

var clearRowAndColumn = function(matrix,row,column){
  var count = matrix.length-1; 
  
  while (count >= 0){
    matrix[row][count] = 0;
    matrix[count][column] = 0;
    count --;
  }
  
  return matrix;
}

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

var printMatrix = function(matrix){
  for (var i = 0; i < matrix.length; i ++ ){
    for (var j = 0; j < matrix.length; j++){
      process.stdout.write(matrix[i][j].toString())
    }
    console.log('')
  }
}

removeZeroesFromMatrix(
  [
  [1,1,0],
  [0,0,1],
  [1,1,1]]
  )