var chai = require('chai');
var expect = chai.expect;
var isPermutation = require('../../../Data_Structures/Arrays_Strings/isPermutation');

describe('isPermutation',function(){
  it('should be a function',function(){
    expect(isPermutation).to.be.a('function');
  });

  it('should return true if each string is a permutation of the other',function(){
    expect(isPermutation("abc","bac")).to.equal(true)
  })
  it('should return true if each string is a permutation of the other',function(){
    expect(isPermutation("aaaa","aaaa")).to.equal(true)
  })

  it('should return false if each string is not a permutation of the other',function(){
    expect(isPermutation("abc","aac")).to.equal(false)
  })
})