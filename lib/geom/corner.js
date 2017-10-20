var vec2 = require('../vec2')
var depInj = require('../depinj')

/** @one and @two are rays indicating walls **/
function Corner(p, da, db){
  if (this === undefined){
    return new Corner(p, da, db)
  }

  if (p instanceof Corner){
    this.p = new vec2(p.p)
    this.da = new vec2(p.da)
    this.db = new vec2(p.db)
    return this
  }

  this.p = vec2.fromVec(p)
  this.da = vec2.fromVec(da).normalize()
  this.db = vec2.fromVec(db).normalize()
}

Corner.prototype.intersect = function(e){
  const isc = depInj.get(Corner,'Intersection')
  if (e instanceof Corner) return isc.cornerToCorner(this, e)
  else if (e instanceof depInj.get(Corner,'Circle')) return isc.circleToCorner(e,this)
  else if (e instanceof depInj.get(Corner,'Line')) return isc.cornerToLine(this,e)
  else if (e instanceof depInj.get(Corner,'Ray')) return isc.cornerToRay(this,e)
  else if (e instanceof depInj.get(Corner,'Segment')) return isc.cornerToSegment(this,e)
  else throw new Error('Corner.intersect(): unknown element')
}

Corner.prototype.fromPoints = function(a, b, c){
  return new Corner(a.sub(b), b, c.sub(b))
}

module.exports = depInj.establishFunc(Corner)
