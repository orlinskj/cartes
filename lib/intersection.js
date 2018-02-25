var util = require('./util')
var depInj = require('./depinj')
var mat3 = require('./mat3')
var mat2 = require('./mat2')
var vec2 = require('./vec2')

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
  var W =  new mat2(alfa.n.x, alfa.n.y, beta.n.x, beta.n.y).det()
  var Wx = new mat2(alfa.d, alfa.n.y, beta.d, beta.n.y).det()
  var Wy = new mat2(alfa.n.x, alfa.d, beta.n.x, beta.d).det()

  if (util.eq(W, 0)){
    return (util.eq(Wx, 0) && util.eq(Wy, 0)) ? [ alfa.clone() ] : []
  }
  else{
    return [ alfa.n.spawn(Wx/W, Wy/W) ]
  }
}
Intersection.lineToRay = function(l, r){
  // { x = px + dx*t
  // { y = py + dy*t
  // { Ax + By + C = 0

  // { x -dx*t = px
  // { y -dy*t = py
  // { Ax + By = -C

  var D = new mat3(
    1, 0, -r.d.x,
    0, 1, -r.d.y,
    l.n.x, l.n.y, 0
  )

  var f = [ r.p.x, r.p.y, l.d ] // -l.d  ???
  var Dx = new mat3(D)
  Dx.col1 = f

  var Dy = new mat3(D)
  Dy.col2 = f

  var Dt = new mat3(D)
  Dt.col3 = f

  /*console.log('D:',D.str)
  console.log('Dx:',Dx.str)
  console.log('Dy:',Dy.str)
  console.log('Dt:',Dt.str)*/

  var detD = D.det(),
      detDx = Dx.det(),
      detDy = Dy.det(),
      detDt = Dt.det()

  /*console.log('det (D):',detD)
  console.log('det(Dx):',detDx)
  console.log('det(Dy):',detDy)
  console.log('det(Dt):',detDt)*/

  if (util.eq(detD,0)){
    if (util.eq(detDx,0) && util.eq(detDy,0) && util.eq(detDt, 0)){
      return [ r.clone() ]
    }
    else{
      return []
    }
  }

  if (detDt / detD < 0){
    return []
  }

  return [ new vec2(detDx / detD, detDy / detD) ]
}
Intersection.lineToSegment = function(l, s){ throw new Error('Not implemented') }

Intersection.rayToRay = function(a, b){ throw new Error('Not implemented') }
Intersection.rayToSegment = function(r, s){ throw new Error('Not implemented') }

Intersection.segmentToSegment = function(a, b){ throw new Error('Not implemented') }

module.exports = depInj.establishFunc(Intersection)
