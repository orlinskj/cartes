var vec2 = require('./vec2')
var depInj = require('./depinj')

// vec2, d || nx, ny, d
function Line(nx, ny, d){
  if (this === undefined){
    return new Line(nx, ny, d)
  }

  if (nx instanceof Line){
    this.n = new vec2(nx.n)
    this.d = nx.d
    return this
  }

  try{
    this.n = vec2.fromVec(nx)
    this.d = ny
  }
  catch(ex){
    this.n = new vec2(nx,ny)
    this.d = d
  }
}

// vec2, vec2 || x, y, vec2 || vec2, x, y || x1, y1, x2, y2
Line.fromPoints = function(){
  var params = Array.prototype.slice.call(arguments)
  var v1, v2
  try {
    v1 = vec2.fromVec(params[0])
    params.shift()
  }
  catch(ex){
    v1 = new vec2(params[0], params[1])
    params.splice(0, 2)
  }

  try {
    v2 = vec2.fromVec(params[0])
  }
  catch(ex){
    v2 = new vec2(params[0],params[1])
  }

  var normal = v2.sub(v1).rotate('ccw').normalize()
  return new Line(normal.x, normal.y, normal.dot(v1))
}

// vec2, vec2 || x, y, vec2 || vec2, x, y || x1, y1, x2, y2
Line.fromPointDir = function(){
  var params = Array.prototype.slice.call(arguments)
  var p, d
  try{
    p = vec2.fromVec(params[0])
    params.shift()
  }
  catch(ex){
    p = new vec2(params[0], params[1])
    params.splice(0,2)
  }

  try{
    d = vec2.fromVec(params[0])
  }
  catch(ex){
    d = new vec2(params[0], params[1])
  }

  var normal = d.rotated('ccw').normalize()
  return new Line(normal.x, normal.y, normal.dot(p))
}

Line.fromSlopeIntercept = function(a, b){
  var normal = (a === 0) ? new vec2(0,1) : new vec2(b/a,-b).normalize()
  return new Line(normal.x,normal.y,normal.dot(0,b))
}

// vec2, d || x, y, d
Line.fromLinearEq = function(x, y, d){
  return new Line(x,y,d)
}

Line.prototype.distance = function(x, y){
  return this.n.dot(new vec2(x, y)) - this.d
}

Line.prototype.clone = function(){
  return new Line(this.n, this.d)
}

Line.prototype.intersect = function(e){
  const isc = depInj(Line,'Intersection')
  if (e instanceof Line) return isc.lineToLine(this,e)
  else if(e instanceof depInj.get(Line,'Circle')) return isc.circleToLine(e,this)
  else if(e instanceof depInj.get(Line,'Corner')) return isc.cornerToLine(e,this)
  else if(e instanceof depInj.get(Line,'Ray')) return isc.lineToRay(this,e)
  else if(e instanceof depInj.get(Line,'Segment')) return isc.lineToSegment(this,e)
  else throw new Error('Line.intersect(): unknown element')
}

module.exports = depInj.establishFunc(Line)
