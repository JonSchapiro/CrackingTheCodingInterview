var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var isUnique = require('../../../Data_Structures/Arrays_Strings/isUnique');

describe('isUnique', function() {
  it('should be a function',function(){
    expect(isUnique).to.be.a('function');
  });

  it('should return false if the string is not unique',function(){
    expect(isUnique('aaa')).to.equal(false);
  });

  it('should return true if the string is unique',function(){
    expect(isUnique('abc')).to.equal(true);
  });

});
