var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var compressedString = require('../../../Data_Structures/Arrays_Strings/compressedString');

describe('Compressed String', function() {
  
  it('should be a function',function(){
    expect(compressedString).to.be.a('function')
  });

  it('should compress a string with same characters',function(){
    expect(compressedString('aaa')).to.equal('a3')
  })

  it('should compress a string without duplicate letters',function(){
    expect(compressedString('aaabbcc')).to.equal('a3b2c2')
  });

  it('should compress a string with duplicate letters',function(){
    expect(compressedString('aaabbccaa')).to.equal('a3b2c2a2')
  });

});