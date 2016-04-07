var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var HashTable = require('../../../Data_Structures/Arrays_Strings/HashTable_LL');

describe('Hash Table - Linked List', function() {
  it('should contain a hash function', function() {
    var ht = new HashTable(5);
    expect(ht.hash).to.be.a('function');
  });

  it('should contain an insert function', function() {
    var ht = new HashTable(5);
    expect(ht.insert).to.be.a('function');
  });

  it('should contain a size property', function() {
    var ht = new HashTable(5);
    expect(ht.size).to.exist;
  });

  it('should hash a string to possilbe index in our array',function(){
    var ht = new HashTable(5);
    expect(ht.hash('hi',5)).to.be.below(5);
  })

  it('should insert a value into a bucket in the hashtable',function(){
    var ht = new HashTable(5);
    ht.insert('hi');
    expect(ht.getList()).to.include({ value: 'hi', next: null })
  })
  it('should not contain duplicates',function(){
    var ht = new HashTable(5);
    ht.insert('hi');
    ht.insert('hi');
    expect(ht.getList()).to.include({ value: 'hi', next: null })
  })

  it('should handle collisions',function(){
    var ht = new HashTable(5);
    
    ht.hash = function(){ //override hashing function
      return 1;
    }
    ht.insert('hi');
    ht.insert('hello');
    
    ht.hash = function(){
      return 0;
    }
    ht.insert('nice')
    
    expect(ht.getList()).to.eql([ { value: 'nice', next: null },
    { value: 'hi', next: { value: 'hello', next: null } } ]);
  
  });
    
});