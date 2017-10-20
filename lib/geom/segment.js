var depInj = require('../depinj')

function Segment(){
  throw new Error('Segment(): not implemented')
}

Segment.prototype.intersect = function(e){
  const isc = depInj(Segment,'Intersection')
  if (e instanceof Segment) return isc.segmentToSegment(this,e)
  else if(e instanceof depInj.get(Segment,'Circle')) return isc.circleToSegment(e,this)
  else if(e instanceof depInj.get(Segment,'Corner')) return isc.cornerToSegment(e,this)
  else if(e instanceof depInj.get(Segment,'Line')) return isc.lineToSegment(e,this)
  else if(e instanceof depInj.get(Segment,'Ray')) return isc.rayToSegment(e,this)
  else throw new Error('Segment.intersect(): unknown element')
}

module.exports = depInj.establishFunc(Segment)
