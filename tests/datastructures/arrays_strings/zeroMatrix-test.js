var chai = require('chai');
var expect = chai.expect;
var zeroMatrix = require('../../../Data_Structures/Arrays_Strings/zeroMatrix');

describe('Zero Matrix',function(){
  it('should be a function',function(){
    expect(zeroMatrix).to.be.a('function')
  })
  it('should zero out a matrix with only one zero',function(){
    expect(zeroMatrix(
      [ [1,1,0],
        [1,1,1],
        [1,1,1]
        ])).to.eql([
        [0,0,0],
        [1,1,0],
        [1,1,0]
        ])
  })
  it('should zero out a matrix with multiple zeros',function(){
    expect(zeroMatrix(
      [[1,1,0],
       [0,1,1],
       [1,1,1]
      ])).to.eql(
      [[0,0,0],
       [0,0,0],
       [0,1,0]
      ]
      )
    })
})
  

