var util = require('./util')
var depInj = require('./depinj')

function Intersection(){}

Intersection.circleToCircle = function(a, b){ throw new Error('Not implemented') }
Intersection.circleToCorner = function(ci, cr){ throw new Error('Not implemented') }
Intersection.circleToLine = function(c, l){ throw new Error('Not implemented') }
Intersection.circleToRay = function(c, r){ throw new Error('Not implemented') }
Intersection.circleToSegment = function(c, s){ throw new Error('Not implemented') }

Intersection.cornerToCorner = function(a, b){ throw new Error('Not implemented') }
Intersection.cornerToLine = function(c, l){
  var Ray = depInj.get(Intersection, 'Ray')
  return Intersection.lineToRay(l,new Ray(c.p,c.da))
    .concat(Intersection.lineToRay(l,new Ray(c.p,c.db)))
}
Intersection.cornerToRay = function(c, r){ throw new Error('Not implemented') }
Intersection.cornerToSegment = function(c, s){ throw new Error('Not implemented') }

Intersection.lineToLine = function(alfa, beta){
  if (util.eq(alfa.n.dot(beta.n), 1.0)){
    return util.eq(alfa.d, beta.d) ? [ alfa.clone() ] : []
  }
  else{
    var y = (alfa.n.x*beta.d - beta.n.x*alfa.d) / (beta.n.x*alfa.n.y - alfa.n.x*beta.n.y)
    var x = (-y*(alfa.n.y+beta.n.y)+alfa.d+beta.d) / (alfa.n.x + beta.n.x)
    return [ alfa.n.spawn(x,y) ]
  }
}
Intersection.lineToRay = function(l, r){
  // { x = px + dx*t
  // { y = py + dy*t
  // { Ax + By + C = 0

  // { x -dx*t = px
  // { y -dy*t = py
  // { Ax + By = -C

}
Intersection.lineToSegment = function(l, s){ throw new Error('Not implemented') }

Intersection.rayToRay = function(a, b){ throw new Error('Not implemented') }
Intersection.rayToSegment = function(r, s){ throw new Error('Not implemented') }

Intersection.segmentToSegment = function(a, b){ throw new Error('Not implemented') }

module.exports = depInj.establishFunc(Intersection)
