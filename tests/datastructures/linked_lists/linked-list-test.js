var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var LinkedList = require('../../../Data_Structures/LinkedList/ll');

describe('Linked List',function(){
  it('should be a function',function(){
    expect(LinkedList).to.be.a('function')
  })

  it ('should contain an empty head to begin with',function(){
    expect(new LinkedList().head).to.equal(null)
  })

  it ('should contain a head if only one node is in the list',function(){
    var ll = new LinkedList()
    ll.insert(5)
    expect(ll.head).to.eql({val:5,next:null})
  })

  it ('should handle multiple insertions',function(){
    var ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    expect(ll.head).to.eql({val:5,next:{val:10,next:{val:20,next:null}}})
  })

  it('should be able to remove a value from the list',function(){
    var ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    ll.remove(10)
    expect(ll.head).to.eql({val:5,next:{val:20,next:null}})
  })

  it ('should be able to remove the head while maintaing the rest of the list',function(){
    var ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    ll.remove(5)
    expect(ll.head).to.eql({val:10,next:{val:20,next:null}})
  })

  it ('should be albe to remove multiple values from the list',function(){
    var ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(20);
    ll.remove(10);
    ll.remove(20);
    expect(ll.head).to.eql({val:5,next:null})
  })
});