var assert = require('assert')
var Cartes = require('../index.js')

describe('Line', function(){
  describe('#Line()', function(){
    it('should work with three numbers', function() {
      var v = new Cartes.Line(1,0,3)

      assert.equal(v.n.x, 1)
      assert.equal(v.n.y, 0)
      assert.equal(v.d, 3)
    })

    it('should work with a vector(N) and a number (d)', function() {
      var v = new Cartes.Line(new Cartes.vec2(1,0), 3)

      assert.equal(v.n.x, 1)
      assert.equal(v.n.y, 0)
      assert.equal(v.d, 3)

      var a = new Cartes.Line([1,0], 3)

      assert.equal(a.n.x, 1)
      assert.equal(a.n.y, 0)
      assert.equal(a.d, 3)
    })

    it('should normalize a vector', function(){
      var v = new Cartes.Line([4,0], 2)
      assert.equal(v.n.x, 1)
      assert.equal(v.n.y, 0)
      assert.equal(v.d, 2)
    })

    it('should work without "new" keyword', function() {
      var v = Cartes.Line(1, 0, 3)

      assert.equal(v.n.x, 1)
      assert.equal(v.n.y, 0)
      assert.equal(v.d, 3)
    })
  })

  describe('#fromPointDir()', function(){
    it('should work with two vectors', function(){
      var a = Cartes.Line.fromPointDir([0,1], [1,0])

      assert.equal(a.n.x, 0)
      assert.equal(a.n.y, 1)
      assert.equal(a.d, 1)
    })

    it('should work with a vector and two numbers', function(){
      var a = Cartes.Line.fromPointDir([0,1], 1, 0)

      assert.equal(a.n.x, 0)
      assert.equal(a.n.y, 1)
      assert.equal(a.d, 1)
    })

    it('should work with two numbers', function(){
      var a = Cartes.Line.fromPointDir([0,1], 1, 0)

      assert.equal(a.n.x, 0)
      assert.equal(a.n.y, 1)
      assert.equal(a.d, 1)
    })
  })
})
