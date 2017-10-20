var assert = require('assert')
var Cartes = require('../index.js')

describe('mat3', function() {
  describe('#mat3()', function() {
    it('should create object with properties "rows", "cols", "length"', function() {
      var m = new Cartes.mat3()

      assert.equal(m.rows, 3)
      assert.equal(m.cols, 3)
      assert.equal(m.length, 9)
    })

    it('should create proper values from complete argument list', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)

      assert.equal(m[0][0], 1)
      assert.equal(m[0][1], 2)
      assert.equal(m[0][2], 3)

      assert.equal(m[1][0], 4)
      assert.equal(m[1][1], 5)
      assert.equal(m[1][2], 6)

      assert.equal(m[2][0], 7)
      assert.equal(m[2][1], 8)
      assert.equal(m[2][2], 9)
    })

    it('should create without new "keyword"', function(){
      var m = Cartes.mat3(1,2,3, 4,5,6, 7,8,9)

      assert.equal(m[0][0], 1)
      assert.equal(m[0][1], 2)
      assert.equal(m[0][2], 3)

      assert.equal(m[1][0], 4)
      assert.equal(m[1][1], 5)
      assert.equal(m[1][2], 6)

      assert.equal(m[2][0], 7)
      assert.equal(m[2][1], 8)
      assert.equal(m[2][2], 9)
    })

    it('should create empty values from incomplete argument list', function(){
      var m = new Cartes.mat3(1,2,3, 4)

      assert.equal(m[0][0], 1)
      assert.equal(m[0][1], 2)
      assert.equal(m[0][2], 3)

      assert.equal(m[1][0], 4)
      assert.equal(m[1][1], 0)
      assert.equal(m[1][2], 0)

      assert.equal(m[2][0], 0)
      assert.equal(m[2][1], 0)
      assert.equal(m[2][2], 0)
    })

    it('should create matrix from array argument', function(){
      var m = new Cartes.mat3([1,2,3, 4,5,6, 7,8,9])

      assert.equal(m.rows,3)
      assert.equal(m.cols,3)
      assert.equal(m.length,9)

      assert.equal(m[0][0], 1)
      assert.equal(m[0][1], 2)
      assert.equal(m[0][2], 3)

      assert.equal(m[1][0], 4)
      assert.equal(m[1][1], 5)
      assert.equal(m[1][2], 6)

      assert.equal(m[2][0], 7)
      assert.equal(m[2][1], 8)
      assert.equal(m[2][2], 9)
    })
  })
})
