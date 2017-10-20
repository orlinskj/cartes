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
  var r = -1
  for (var i=0; i<this.length; ++i){
    if (i % 3 === 0) this[++r] = []
    if (i < arguments.length) this[r].push(arguments[i])
    else this[r].push(0)
  }
  return this
}

module.exports = mat3
