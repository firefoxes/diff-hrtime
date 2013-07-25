
var diffHrtime =  function(b, a){
  // desctructure/capture secs and nanosecs
  var as = a[0], ans = a[1],
      bs = b[0], bns = b[1],
      ns = ans - bns, // nanosecs delta, can overflow (will be negative)
      s = as - bs     // secs delta
  if (ns < 0) { // has overflowed
    s -= 1      // cut a second
    ns += 1e9   // add a billion nanosec (to neg number)
  }
  return [s, ns]
}

module.exports = diffHrtime

// // diffHrtime tests
// var assert = require('assert')
// assert.deepEqual(diffHrtime([1, 1], [1, 0]), [0, 1])
// assert.deepEqual(diffHrtime([1, 0], [0, 1]), [0, 1e9-1])
