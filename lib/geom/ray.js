var vec2 = require('../vec2')
var depInj = require('../depinj')

function Ray(p, d){
  if (this === undefined){
    return new Ray(p, d)
  }

  if (p instanceof Ray){
    this.p = new vec2(p.p)
    this.d = new vec2(p.d)
    return this
  }

  this.p = new vec2(p)
  this.d = new vec2(d).normalize()
  return this
}

Ray.prototype.clone = function(){
  return new Ray(this)
}

Ray.prototype.intersect = function(e){
  const isc = depInj(Ray,'Intersection')
  if (e instanceof Ray) return isc.rayToRay(this,e)
  else if(e instanceof depInj.get(Ray,'Circle')) return isc.circleToRay(e,this)
  else if(e instanceof depInj.get(Ray,'Corner')) return isc.cornerToRay(e,this)
  else if(e instanceof depInj.get(Ray,'Line')) return isc.lineToRay(e,this)
  else if(e instanceof depInj.get(Ray,'Segment')) return isc.rayToSegment(this,e)
  else throw new Error('Ray.intersect(): unknown element')
}

module.exports = depInj.establishFunc(Ray)
