var Cartes = require('../index.js')
var assert = require('chai').assert

var eps = Cartes.constants.eps

var line = new Cartes.Line(0, 1, 1)
var rayP = new Cartes.Ray([0,-1], [1, 1]) // ray intersects a line (point)
var rayR = new Cartes.Ray([0,1], [1, 0]) // ray on line
var rayN = new Cartes.Ray([0,2], [1, 1]) // ray pointed to wrong side (does not collide)
var rayNP= new Cartes.Ray([0,2], [1, 0]) // ray parallel to a line

describe('Intersection', function(){
  describe('#lineToRay()', function(){
    it('should calculate intersection in case of point', function(){
      var res = line.intersect(rayP)
      assert.isArray(res)
      assert.equal(res.length, 1)
      assert.instanceOf(res[0], Cartes.vec2)
      assert.approximately(res[0].x, 2, eps)
      assert.approximately(res[0].y, 1, eps)
    })

    it('should calculate intersection in case of ray', function(){
      var res = line.intersect(rayR)
      assert.isArray(res)
      assert.equal(res.length, 1)
      assert.instanceOf(res[0], Cartes.Ray)
      assert.deepEqual(res[0], new Cartes.Ray(new Cartes.vec2(0,1), new Cartes.vec2(1,0)))
    })

    it('should calculate intersection in case of ray parallel to a line', function(){
      var res = line.intersect(rayNP)
      assert.isArray(res)
      assert.equal(res.length, 0)
    })

    it('should calculate intersection in case of ray directed outwards a line', function(){
      var res = line.intersect(rayN)
      assert.isArray(res)
      assert.equal(res.length, 0)
    })
  })
})
