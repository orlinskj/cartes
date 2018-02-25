var util = require('./util')

function mat2(){
  if (this === undefined){
    return util.applyToConstructor(mat2,arguments)
  }

  if (util.isArray(arguments[0])){
    return util.applyToConstructor(mat2,arguments[0])
  }

  this.rows = 2
  this.cols = 2
  this.length = this.rows * this.cols

  if (arguments[0] instanceof mat2){
    var m = arguments[0]
    this[0] = []; this[0][0] = m[0][0]; this[0][1] = m[0][1]
    this[1] = []; this[1][0] = m[1][0]; this[1][1] = m[1][1]
    return this
  }

  var r = -1
  for (var i=0; i<this.length; ++i){
    if (i % 2 === 0) this[++r] = []
    if (i < arguments.length) this[r].push(arguments[i])
    else this[r].push(0)
  }
  return this
}

mat2.prototype.det = function(){
  return this[0][0]*this[1][1]-this[1][0]*this[0][1]
}

mat2._columnProperty = function(n){
  return {
    get: function(){
      return [ this[0][n], this[1][n] ]
    },
    set: function(v){
      this[0][n] = v[0] || 0
      this[1][n] = v[1] || 0
      return [ this[0][n], this[1][n] ]
    }
  }
}

mat2._rowProperty = function(n){
  return {
    get: function(){
      return this[n].slice()
    },
    set: function(v){
      this[n][0] = v[0] || 0
      this[n][1] = v[1] || 0
      return this[n].slice()
    }
  }
}

Object.defineProperty(mat2.prototype, "col1", mat2._columnProperty(0))
Object.defineProperty(mat2.prototype, "col2", mat2._columnProperty(1))

Object.defineProperty(mat2.prototype, "row1", mat2._rowProperty(0))
Object.defineProperty(mat2.prototype, "row2", mat2._rowProperty(1))

Object.defineProperty(mat2.prototype, "str", {
  get: function(){
    return this.toString()
  }
})

mat2.prototype.toString = function(){
  return '[ [' + this[0].toString() + '], [' + this[1].toString() + '] ]'
}

module.exports = mat2
