var constants = require('./constants')

function isNumber(n){
  return !isNaN(parseFloat(n))
}

function isString(s){
  return s instanceof String || typeof s === 'string'
}

module.exports = {
  isNumber: isNumber,
  numberize: function(n){
    return isNumber(n) ? parseFloat(n) : 0
  },
  eq: function(a, b){
    return Math.abs(b-a) < constants.eps
  },
  applyToConstructor: function(ctor, argArray) {
      var args = [null].concat(argArray);
      var factoryFunction = ctor.bind.apply(ctor, args)
      return new factoryFunction()
  },
  isArray: function(o){
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  isString: isString
}
