var chai = require('chai');
var expect = chai.expect;
var isPermutation = require('../../../Data_Structures/Arrays_Strings/oneAway');

describe('One Away',function(){
  it ('should be a function',function(){
    expect(isPermutation).to.be.a('function')
  });

  it('should return true if string 2 is missing 1 character from string 1',function(){
    expect(isPermutation('pale','ple')).to.equal(true);
  })

   it('should return true if string 1 has 1 more character than string 2',function(){
    expect(isPermutation('pales','pale')).to.equal(true);
  })

  it('should return true string 1 has a single character diff from string 2',function(){
    expect(isPermutation('pale','bale')).to.equal(true);
  })

  it('should handle edge cases',function(){
    expect(isPermutation('p','ppp')).to.equal(false); //two chars away not one
  })
  it('should handle edge cases',function(){
    expect(isPermutation('p','pp')).to.equal(true); //two chars away not one
  })

  it('should return false if string 1 is more than one character away from string 2',function(){
    expect(isPermutation('pale','bake')).to.equal(false);
  })


});