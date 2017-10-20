var util = require('./util')

function mat3(){
  if (this === undefined){
    return util.applyToConstructor(mat3,arguments)
  }

  if (util.isArray(arguments[0])){
    return util.applyToConstructor(mat3,arguments[0])
  }

  this.rows = 3
  this.cols = 3
  this.length = this.rows * this.cols

  if (arguments[0] instanceof mat3){
    var m = arguments[0]
    this[0] = []; this[0][0] = m[0][0]; this[0][1] = m[0][1]; this[0][2] = m[0][2]
    this[1] = []; this[1][0] = m[1][0]; this[1][1] = m[1][1]; this[1][2] = m[1][2]
    this[2] = []; this[2][0] = m[2][0]; this[2][1] = m[2][1]; this[2][2] = m[2][2]
    return this
  }

  var r = -1
  for (var i=0; i<this.length; ++i){
    if (i % 3 === 0) this[++r] = []
    if (i < arguments.length) this[r].push(arguments[i])
    else this[r].push(0)
  }
  return this
}

mat3.prototype.det = function(){
  return this[0][0]*this[1][1]*this[2][2]
    + this[0][1]*this[1][2]*this[2][0]
    + this[0][2]*this[1][0]*this[2][1]
    - this[0][2]*this[1][1]*this[2][0]
    - this[0][1]*this[1][0]*this[2][2]
    - this[0][0]*this[1][2]*this[2][1]
}

mat3._columnProperty = function(n){
  return {
    get: function(){
      return [ this[0][n], this[1][n], this[2][n] ]
    },
    set: function(v){
      this[0][n] = v[0] || 0
      this[1][n] = v[1] || 0
      this[2][n] = v[2] || 0
      return [ this[0][n], this[1][n], this[2][n] ]
    }
  }
}

mat3._rowProperty = function(n){
  return {
    get: function(){
      return this[n].slice()
    },
    set: function(v){
      this[n][0] = v[0] || 0
      this[n][1] = v[1] || 0
      this[n][2] = v[2] || 0
      return this[n].slice()
    }
  }
}

Object.defineProperty(mat3.prototype, "col1", mat3._columnProperty(0))
Object.defineProperty(mat3.prototype, "col2", mat3._columnProperty(1))
Object.defineProperty(mat3.prototype, "col3", mat3._columnProperty(2))

Object.defineProperty(mat3.prototype, "row1", mat3._rowProperty(0))
Object.defineProperty(mat3.prototype, "row2", mat3._rowProperty(1))
Object.defineProperty(mat3.prototype, "row3", mat3._rowProperty(2))



module.exports = mat3
