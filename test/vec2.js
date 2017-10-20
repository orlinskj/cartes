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

  describe('#isVec()', function(){
    it('should accept vec2 instance', function(){
      var v = new Cartes.vec2(1,2)
      assert.ok(Cartes.vec2.isVec(v))
    })

    it('should accept array', function(){
      var a = [ 1, 2 ];
      assert.ok(Cartes.vec2.isVec(a))
    })

    it('should accept object with "x" and/or "y" property', function(){
      assert.ok(Cartes.vec2.isVec({ x: 2, y: 3 }))
      assert.ok(Cartes.vec2.isVec({ x: 2 }))
      assert.ok(Cartes.vec2.isVec({ y: 3 }))
    })

    it('should not accept object without "x" and "y"', function(){
      assert.ok(!Cartes.vec2.isVec({a: 1, b: 5}))
    })
  })

  describe('#add()', function(){
    it('should support number parameters', function(){
      assert.deepEqual(new Cartes.vec2(1,2).add(-3,4), {x:-2, y:6})
      assert.deepEqual(new Cartes.vec2(1,2).add(-3), {x:-2, y:2})
      assert.deepEqual(new Cartes.vec2(0,0).add(0,4), {x:0, y:4})
    })

    it('should not mutate original object', function(){
      var v = new Cartes.vec2(1,2)
      var u = v.add(2,1)

      assert.deepEqual(v, {x: 1, y: 2})
    })

    it('should support array parameter', function(){
      assert.deepEqual(new Cartes.vec2(1,2).add([2,-3]), {x: 3, y:-1})
      assert.deepEqual(new Cartes.vec2(1,2).add([-2]), {x: -1, y:2})
    })

    it('should support vector parameter', function(){
      assert.deepEqual(new Cartes.vec2(1,2).add(new Cartes.vec2(2,-3)), {x:3, y:-1})
    })

    it('should support object', function(){
      assert.deepEqual(new Cartes.vec2(1,2).add({x: 2, y:-3}), {x:3, y:-1})
      assert.deepEqual(new Cartes.vec2(1,2).add({x: 2}), {x:3, y:2})
      assert.deepEqual(new Cartes.vec2(1,2).add({y:-3}), {x:1, y:-1})
    })
  })

  describe('#sub()', function(){
    it('should support number parameters', function(){
      assert.deepEqual(new Cartes.vec2(1,2).sub(-3,4), {x:4, y:-2})
      assert.deepEqual(new Cartes.vec2(1,2).sub(-3), {x:4, y:2})
      assert.deepEqual(new Cartes.vec2(0,0).sub(0,4), {x:0, y:-4})
    })

    it('should not mutate original object', function(){
      var v = new Cartes.vec2(1,2)
      var u = v.sub(2,1)

      assert.deepEqual(v, {x: 1, y: 2})
    })

    it('should support array parameter', function(){
      assert.deepEqual(new Cartes.vec2(1,2).sub([2,-3]), {x:-1, y:5})
      assert.deepEqual(new Cartes.vec2(1,2).sub([-2]), {x:3, y: 2})
    })

    it('should support vector parameter', function(){
      assert.deepEqual(new Cartes.vec2(1,2).sub(new Cartes.vec2(2,-3)), {x:-1, y:5})
    })

    it('should support object', function(){
      assert.deepEqual(new Cartes.vec2(1,2).sub({x: 2, y:-3}), {x:-1, y:5})
      assert.deepEqual(new Cartes.vec2(1,2).sub({x: 2}), {x:-1, y:2})
      assert.deepEqual(new Cartes.vec2(1,2).sub({y:-3}), {x:1, y:5})
    })
  })

  describe('#spawn()', function(){
    it('should call vec2 constructor', function(){
      var v = new Cartes.vec2(1.1, 2.2)
      var u = v.spawn(0.1, 0.2)

      assert.ok(v != u)
      assert.deepEqual(v, {x:1.1, y:2.2})
      assert.deepEqual(u, {x:0.1, y:0.2})
    })
  })

  describe('#clone()', function(){
    it('should clone a vector', function(){
      var v = new Cartes.vec2(1.1, 2.2)
      var u = v.clone()

      assert.ok(v != u)
      assert.deepEqual(v, {x:1.1, y:2.2})
      assert.deepEqual(u, {x:1.1, y:2.2})
    })
  })

  describe('#length', function(){
    it('should return vector length', function(){
      assert.equal(new Cartes.vec2(-3,4).length, 5)
    })

    it('should return zero vector length', function(){
      assert.equal(new Cartes.vec2().length, 0)
    })

    it('should be readonly', function(){
      var v = new Cartes.vec2(-3,-4)
      assert.equal(v.length, 5)
      v.length = 1024
      assert.equal(v.length, 5)
    })
  })

  describe('#normalize()', function(){
    it('should return normalized vector', function(){
      var v = new Cartes.vec2(0,100)
      assert.deepEqual(v.normalize(), {x:0, y:1})

      var x = 8.5
      var y = 2.1
      var u = new Cartes.vec2(x,y)
      var lu = Math.sqrt(x*x + y*y)
      assert.deepEqual(u.normalize(), {x:x/lu, y:y/lu})
    })

    it('should mutate original vector', function(){
      var v = new Cartes.vec2(0,100)
      v.normalize()
      assert.deepEqual(v, {x:0, y: 1})
    })

    it('should not throw on zero-length vector', function(){
      var v = new Cartes.vec2(0,0)
      v.normalize()
    })
  })

  describe('#normalized()', function(){
    it('should return normalized vector', function(){
      var v = new Cartes.vec2(0,100)
      assert.deepEqual(v.normalized(), {x:0, y:1})

      var x = 8.5
      var y = 2.1
      var u = new Cartes.vec2(x,y)
      var lu = Math.sqrt(x*x + y*y)
      assert.deepEqual(u.normalized(), {x:x/lu, y:y/lu})
    })

    it('should not mutate original vector', function(){
      var v = new Cartes.vec2(0,100)
      v.normalized()
      assert.deepEqual(v, {x:0, y: 100})
    })

    it('should not throw on zero-length vector', function(){
      var v = new Cartes.vec2(0,0)
      v.normalized()
    })
  })

  describe('#dot()', function(){
    it('should support number parameters', function(){
      assert.equal(new Cartes.vec2(1,2).dot(3,4), 1*3 + 2*4)
      assert.equal(new Cartes.vec2(1,2).dot(-2), 1*(-2) + 2*0)
    })

    it('should support array parameter', function(){
      assert.equal(new Cartes.vec2(1,2).dot([3,4]), 1*3 + 2*4)
      assert.equal(new Cartes.vec2(1,2).dot([-2]), 1*(-2) + 2*0)
    })

    it('should return zero if corresponding values of vectors\' are zeros', function(){
      assert.equal(new Cartes.vec2(100,0).dot(0,200), 0)
    })
  })
})
