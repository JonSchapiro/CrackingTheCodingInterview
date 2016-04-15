var printSpiral = function(matrix,row,col,heightBound,widthBound){
  if (widthBound <= 0 || matrix.length <= 0){
    return false;
  }
  
  //top row
  while(col < widthBound ){ //traverse entire width of top row
    
    console.log(matrix[row][col]);
    col++;
  }
  col--;
  //right side
  while(row < widthBound-1){ 
    
    console.log(matrix[++row][col]);
  }
  
  //bottom row
  while(col > heightBound){
    
    console.log(matrix[row][--col])
  }
  
  //left side
  while(row > heightBound+1){
    
    console.log(matrix[--row][col])
  }
  col++
  widthBound --;
  heightBound++;
  printSpiral(matrix,row,col,heightBound,widthBound);
}

var matrix = [[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
       ]
var largeMatrix = [[1, 2, 3, 4, 5],
           [6, 7, 8, 9, 10],
           [11,12,13,14,15],
           [16,17,18,19,20],
           [21,22,23,24,25]]
printSpiral(largeMatrix,0,0,0,largeMatrix.length)
