function add(u,v){
  return [ u[0]+v[0], u[1]+v[1] ]
}

function sub(u,v){
  return [ u[0]-v[0], u[1]-v[1] ]
}

function dot(u,v){
  return u[0]*v[0] + u[1]*v[1]
}

function length(u){
  return Math.sqrt(u[0]*u[0]+u[1]*u[1])
}

function normalize(u){
  var l = length(u)
  return l > 0 ? [ u[0]/l, u[1]/l ] : u
}

function invert(u){
  return [ -u[0], -u[1] ]
}

function mult(u,k){
  return [ u[0]*k, u[1]*k ]
}
