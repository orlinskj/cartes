var depInjObj = {}

require('./intersection')(depInjObj)

module.exports = {
  vec2: require('./vec2'),
  Line: require('./line')(depInjObj),
  Segment: require('./segment')(depInjObj),
  Ray: require('./ray')(depInjObj),
  Circle: require('./circle')(depInjObj),
  Corner: require('./corner')(depInjObj)
}
