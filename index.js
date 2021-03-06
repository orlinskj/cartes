var depInjObj = {}
var util = require('./lib/util')

require('./lib/intersection')(depInjObj)

var exp = {
  vec2: require('./lib/vec2'),
  mat3: require('./lib/mat3'),
  Line: require('./lib/geom/line')(depInjObj),
  Segment: require('./lib/geom/segment')(depInjObj),
  Ray: require('./lib/geom/ray')(depInjObj),
  Circle: require('./lib/geom/circle')(depInjObj),
  Corner: require('./lib/geom/corner')(depInjObj),
  constants: require('./lib/constants')
}

for (var key in util){
  exp[key] = util[key]
}

module.exports = exp
