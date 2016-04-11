/*
  What I Learned:
    - current layer represents a single full "lap around the matrix" (outer, inner, inner inner, etc.)
    - each layer moves inwards
    - it is only necessary to transpose half of the matrix as the other half will be naturally rotated
    - we rotate a matrix by swapping points (elements) from each layer
    - we keep track of a currentLayer which is equal to the current index of the outer for loop
    - we keep track of a bottomLayer which is equal to the length of the matrix - 1 - the currentLayer
    - for each element in a layer (starting at index = currentLayer and ending at index bottomLayer):
      - store a ref to the top left element
      - bottom left element replaces top element
      - bottom right element replaces the bottom left
      - top right element replaces the bottom right 
      - top right is replaced by the top left
    - on next element in layer we increase an offset variable by one, telling us which position in the layer to swap to
      - for example, the second element in the layer will have an offset of 1 (elementIndex-currentLayer) meaning that for
      each layer we place it in a position one away from the previous switch
    
    -  Top = matrix[currentLayer][cellIndex]
    -  Left = matrix[bottomLayer - offset][currentLayer]
    -  Right = matrix[cellIndex][bottomLayer]
    -  Bottom = matrix[bottomLayer][bottomLayer - offset]
*/

//rotate layer by layer, cell by cell
var rotateMatrix = function(matrix){
  
  if (!matrix || !matrix.length || matrix.length < 2){ return false;}
  
  var matrixLength = matrix.length;
  
  for (var i = 0; i < matrix.length/2; i++){ //only need to transpose half the matrix
    
    var currentLayer = i;//aka outer, inner, inner inner (dependent on size of matrix);
    var bottomLayer = matrix.length -1 - currentLayer; //last layer to transpose upon

    for (var cell = currentLayer; cell < bottomLayer; cell++){ //amount of cells to go through is relative to the height of the overall layer - (starting point of cell = to layer we are on)
      var offset = cell - currentLayer; //index in layer

      //top
      var top = matrix[currentLayer][cell];
      
      //place bottom left into top
      matrix[currentLayer][cell] = matrix[bottomLayer - offset][currentLayer];

      //place bottom right into bottom left
      matrix[bottomLayer-offset][currentLayer] = matrix[bottomLayer][bottomLayer-offset];
      
      //place top right into bottom right
      matrix[bottomLayer][bottomLayer-offset] = matrix[cell][bottomLayer];
      
      //place top into top right
      matrix[cell][bottomLayer] = top;
    }
  }
  
  return matrix;
  
}

module.exports = rotateMatrix;