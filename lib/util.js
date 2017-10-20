var eps = 1e-8

function isNumber(n){
  return !isNaN(parseFloat(n))
}

module.exports = {
  isNumber: isNumber,
  numberize: function(n){
    return isNumber(n) ? n : 0
  },
  eq: function(a, b){
    return Math.abs(b-a) < eps
  },
  applyToConstructor: function(ctor, argArray) {
      var args = [null].concat(argArray);
      var factoryFunction = ctor.bind.apply(ctor, args)
      return new factoryFunction()
  },
  isArray: function(o){
    return Object.prototype.toString.call(o) === '[object Array]'
  },
  invSqrtTwo: 1.0 / Math.sqrt(2)
}
