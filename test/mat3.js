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

  it('should create matrix from another matrix', function(){
    var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)
    var n = new Cartes.mat3(m)

    n[0][0] = 100
    n[1][1] = 200
    n[2][2] = 300

    assert.equal(n[0][0], 100); assert.equal(m[0][0], 1)
    assert.equal(n[1][1], 200); assert.equal(m[1][1], 5)
    assert.equal(n[2][2], 300); assert.equal(m[2][2], 9)
  })

  describe('#det()', function(){
    it('should calculate determinant', function(){
      var m = new Cartes.mat3(1,0,0, 0,1,0, 0,0,1)
      assert.equal(m.det(), 1)

      var n = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)
      assert.equal(n.det(), 0)
    })
  })

  describe('#col', function(){
    it('should return values from matrix column', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)
      assert.deepEqual(m.col1, [1,4,7])
      assert.deepEqual(m.col2, [2,5,8])
      assert.deepEqual(m.col3, [3,6,9])
    })

    it('should return copy of matrix column', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)
      var c1 = m.col1
      c1[0] = 100

      assert.equal(c1[0], 100)
      assert.equal(m[0][0], 1)
    })

    it('should allow to modify column through setter', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)

      m.col3 = [100, 200, 300]
      assert.deepEqual(m[0], [1,2,100])
      assert.deepEqual(m[1], [4,5,200])
      assert.deepEqual(m[2], [7,8,300])
    })
  })

  describe('#row', function(){
    it('should return values from matrix row', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)
      assert.deepEqual(m.row1, [1,2,3])
      assert.deepEqual(m.row2, [4,5,6])
      assert.deepEqual(m.row3, [7,8,9])
    })

    it('should return copy of matrix column', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)
      var r1 = m.row1
      r1[0] = 100

      assert.equal(r1[0], 100)
      assert.equal(m[0][0], 1)
    })

    it('should allow to modify column through setter', function(){
      var m = new Cartes.mat3(1,2,3, 4,5,6, 7,8,9)

      m.row2 = [100, 200, 300]
      assert.deepEqual(m[0], [1,2,3])
      assert.deepEqual(m[1], [100,200,300])
      assert.deepEqual(m[2], [7,8,9])
    })
  })
})
