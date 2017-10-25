'use strict';

var util = require('./util')
var constants = require('./constants')

function vec2(x, y){
  if (this === undefined){
    return new vec2(x,y)
  }

  try{
    return vec2.fromVec(x)
  }
  catch(ex){
    this.x = util.numberize(x)
    this.y = util.numberize(y)
    return this
  }
}

vec2._strList = [
  'topleft',    'top',    'topright',
  'left',                 'right',
  'bottomleft', 'bottom', 'bottomright'
]

vec2.isVec = function(v){
  try{
    var obj = vec2.fromVec(v)
    return true
  }
  catch(ex){
    return false
  }
}

vec2.fromVec = function(v){
  if (Object.prototype.toString.call(v) === '[object Array]'){
    return new vec2(v[0], v[1])
  }
  else if(typeof v === 'string' || v instanceof String){
    v = v.toLowerCase().replace(/[_-]/,'')
    switch(v){
      case 'top':         return new vec2(0, -1)
      case 'topright':    return new vec2(constants.invSqrtTwo, -constants.invSqrtTwo)
      case 'right':       return new vec2(1, 0)
      case 'bottomright': return new vec2(constants.invSqrtTwo, constants.invSqrtTwo)
      case 'bottom':      return new vec2(0, 1)
      case 'bottomleft':  return new vec2(-constants.invSqrtTwo, constants.invSqrtTwo)
      case 'left':        return new vec2(-1, 0)
      case 'topleft':     return new vec2(-constants.invSqrtTwo, -constants.invSqrtTwo)
      default: throw new Error('vec2.fromVec(): invalid string description')
    }
  }
  else if (typeof v === 'object' && (v.x !== undefined || v.y !== undefined)){
    return new vec2(v.x, v.y)
  }
  else{
    throw new Error('vec2.fromVec(): not a vector');
  }
}

vec2.prototype.add = function(x, y){
  try {
    var v = vec2.fromVec(x);
    y = v.y
    x = v.x
  } catch(ex){}
  return new vec2(this.x + util.numberize(x), this.y + util.numberize(y))
}

vec2.prototype.spawn = function(x, y){
  return new vec2(x, y)
}

vec2.prototype.clone = function(){
  return new vec2(this)
}

vec2.prototype.sub = function(x, y){
  try{
    var v = vec2.fromVec(x)
    y = v.y
    x = v.x
  } catch(ex){}
  return new vec2(this.x - util.numberize(x), this.y - util.numberize(y))
}

Object.defineProperty(vec2.prototype, "length", {
  get: function length(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
})

vec2.prototype.normalize = function(){
  var l = this.length
  if (l > 0.0){
    this.x = this.x / l
    this.y = this.y / l
  }
  return this
}

vec2.prototype.normalized = function(){
  return new vec2(this).normalize()
}

vec2.prototype.invert = function(){
  this.x = -this.x
  this.y = -this.y
  return this
}

vec2.prototype.inverted = function(){
  return new vec2(-this.x, -this.y)
}

vec2.prototype.dot = function(x, y){
  try{
    var v = vec2.fromVec(x)
    y = v.y
    x = v.x
  } catch(ex){}
  return this.x * util.numberize(x) + this.y * util.numberize(y)
}

vec2.prototype.rotate = function(a){
  if (typeof a === 'string'){
    var x = this.x
    switch (a){
      case 'cw':
        this.x = this.y
        this.y = -x
        return this
      case 'ccw':
        this.x = -this.y
        this.y = x
        return this
      default:
        throw new Error('vec2.rotate(): invalid string ("cw" or "ccw" is accepted)')
    }
  }
  else{
    var cos = Math.cos(a)
    var sin = Math.sin(a)
    var x = this.x
    var y = this.y
    this.x = x * cos - y * sin
    this.y = x * sin + y * cos
    return this
  }
}

vec2.prototype.rotated = function(a){
  return new vec2(this).rotate(a)
}

vec2.prototype.translate = function(x, y){
  try{
    var v = vec2.fromVec(x)
    y = v.y
    x = v.x
  } catch(ex){}
  this.x = this.x + util.numberize(x)
  this.y = this.y + util.numberize(y)
  return this
}

vec2.prototype.translated = function(x, y){
  return new vec2(this).translate(x,y)
}

vec2.prototype.scale = function(x, y){
  try{
    var v = vec2.fromVec(x)
    y = v.y
    x = v.x
  } catch(ex){}
  this.x = this.x * util.numberize(x)
  this.y = this.y * util.numberize(y)
  return this
}

vec2.prototype.scaled = function(x, y){
  return new vec2(this).scale(x,y)
}

vec2.prototype.distance = function(x, y){
  try{
    var v = vec2.fromVec(x)
    y = v.y
    x = v.x
  } catch(ex){}
  return this.sub(util.numberize(x),util.numberize(y)).length
}

vec2.prototype.mult = function(k){
  this.x = this.x * k
  this.y = this.y * k
  return this
}

Object.defineProperty(vec2.prototype, "str", {
  get: function length(){
    return this.toString(', ',1)
  }
})

vec2.prototype.toString = function(sep, bound){
  sep = (sep === undefined) ? ' ' : sep
  var s = this.x.toString() + sep + this.y.toString()
  return bound ? '[ ' + s + ' ]' : s
}

vec2.prototype.multed = function(k){
  return new vec2(this.x * k, this.y * k)
}

module.exports = vec2
