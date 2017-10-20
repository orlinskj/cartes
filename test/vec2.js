var assert = require('assert')
var Cartes = require('../index.js')
var util = require('../lib/util.js')

describe('vec2', function() {
  describe('#vec2()', function() {
    it('should work with two numbers', function() {
      var v = new Cartes.vec2(1.1, 2.2)

      assert.equal(v.x, 1.1)
      assert.equal(v.y, 2.2)
    })

    it('should work with one number (x)', function() {
      var v = new Cartes.vec2(1.1)

      assert.equal(v.x, 1.1)
      assert.equal(v.y, 0)
    })

    it('should work with no arguments', function() {
      var v = new Cartes.vec2()

      assert.equal(v.x, 0)
      assert.equal(v.y, 0)
    })

    it('should work without "new" keyword', function() {
      var v = Cartes.vec2(1.1, 2.2)

      assert.equal(v.x, 1.1)
      assert.equal(v.y, 2.2)
    })

    it('should work with array with one element', function() {
      var v = new Cartes.vec2([1.1])

      assert.equal(v.x, 1.1)
      assert.equal(v.y, 0)
    })

    it('should work with array with two elements', function() {
      var v = new Cartes.vec2([1.1, 2.2])

      assert.equal(v.x, 1.1)
      assert.equal(v.y, 2.2)
    })
  })

  describe('#fromVec', function(){
    it('should work with array',function(){
      var v = Cartes.vec2.fromVec([1.1, 2.2])

      assert.equal(v.x, 1.1)
      assert.equal(v.y, 2.2)
    })

    it('should work with another vec',function(){
      var a = new Cartes.vec2(1.1, 2.2)
      var v = Cartes.vec2.fromVec(a)

      assert.ok(a != v)
      assert.equal(v.x, 1.1)
      assert.equal(v.y, 2.2)
    })

    it('should work with object {x, y}',function(){
      var v = Cartes.vec2.fromVec({x: 1.2, y: 2.1})

      assert.equal(v.x, 1.2)
      assert.equal(v.y, 2.1)
    })

    it('should work with string token',function(){
      assert.deepEqual(Cartes.vec2.fromVec('top'), {x: 0, y: -1})
      assert.deepEqual(Cartes.vec2.fromVec('Top'), {x: 0, y: -1})
      assert.deepEqual(Cartes.vec2.fromVec('TOP'), {x: 0, y: -1})

      assert.deepEqual(Cartes.vec2.fromVec('topright'), {x: util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('top_right'), {x: util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('top-right'), {x: util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('Top-Right'), {x: util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('topRight'), {x: util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('TOPRIGHT'), {x: util.invSqrtTwo, y: -util.invSqrtTwo})

      assert.deepEqual(Cartes.vec2.fromVec('right'), {x: 1, y: 0})
      assert.deepEqual(Cartes.vec2.fromVec('Right'), {x: 1, y: 0})
      assert.deepEqual(Cartes.vec2.fromVec('RIGHT'), {x: 1, y: 0})

      assert.deepEqual(Cartes.vec2.fromVec('bottomright'), {x: util.invSqrtTwo, y: util.invSqrtTwo})

      assert.deepEqual(Cartes.vec2.fromVec('bottom'), {x: 0, y: 1})

      assert.deepEqual(Cartes.vec2.fromVec('bottomleft'), {x: -util.invSqrtTwo, y: util.invSqrtTwo})

      assert.deepEqual(Cartes.vec2.fromVec('left'), {x: -1, y: 0})
      assert.deepEqual(Cartes.vec2.fromVec('Left'), {x: -1, y: 0})
      assert.deepEqual(Cartes.vec2.fromVec('LEFT'), {x: -1, y: 0})

      assert.deepEqual(Cartes.vec2.fromVec('topleft'), {x: -util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('top_left'), {x: -util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('top-left'), {x: -util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('Top-Left'), {x: -util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('topLeft'), {x: -util.invSqrtTwo, y: -util.invSqrtTwo})
      assert.deepEqual(Cartes.vec2.fromVec('topLeft'), {x: -util.invSqrtTwo, y: -util.invSqrtTwo})
    })
  })
})
