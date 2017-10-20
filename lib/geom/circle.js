var depInj = require('../depinj')

function Circle(){
  throw new Error('Circle(): not implemented')
}

Circle.prototype.intersect = function(e){
  const isc = depInj.get(Circle,'Intersection')
  if (e instanceof Circle) return isc.circleToCircle(this, e)
  else if (e instanceof depInj.get(Circle,'Corner')) return isc.circleToCorner(this,e)
  else if (e instanceof depInj.get(Circle,'Line')) return isc.circleToLine(this,e)
  else if (e instanceof depInj.get(Circle,'Ray')) return isc.circleToRay(this,e)
  else if (e instanceof depInj.get(Circle,'Segment')) return isc.circleToSegment(this,e)
  else throw new Error('Circle.intersect(): unknown element')
}

module.exports = depInj.establishFunc(Circle)
