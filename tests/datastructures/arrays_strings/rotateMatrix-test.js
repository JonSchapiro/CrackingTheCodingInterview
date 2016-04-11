var chai = require('chai');
var expect = chai.expect;
var rotateMatrix = require('../../../Data_Structures/Arrays_Strings/rotateMatrix');

describe('Rotate Matrix', function() {
  it('should be a function',function(){
    expect(rotateMatrix).to.be.a('function');
  });
  it('should rotate a 4x4 matrix',function(){
    expect(rotateMatrix([
       [1, 2, 3, 4],
       [5, 6, 7, 8],
       [9,10,11,12],
       [13,14,15,16]
      ])).to.eql( [ 
       [13, 9,  5, 1],
       [14, 10, 6, 2],
       [15, 11, 7, 3],
       [16 ,12, 8, 4]
     ])
  });

  it('should rotate a 3x3 matrix',function(){
    expect(rotateMatrix([
      [1,2,3],
      [4,5,6],
      [7,8,9]])
    ).to.eql([
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ])
  });
});