function zero(fn=0) {
    return fn != 0 ? fn(0) : 0
  }
  function one(fn=1) {
    return fn != 1 ? fn(1) : 1
  }
  function two(fn=2) {
    return fn != 2 ? fn(2) : 2
  }
  function three(fn=3) {
    return fn != 3 ? fn(3) : 3
  }
  function four(fn=4) {
    return fn != 4 ? fn(4) : 4
  }
  function five(fn=5) {
    return fn != 5 ? fn(5) : 5
  }
  function six(fn=6) {
    return fn != 6 ? fn(6) : 6
  }
  function seven(fn=7) {
    return fn != 7 ? fn(7) : 7
  }
  function eight(fn=8) {
    return fn != 8 ? fn(8) : 8
  }
  function nine(fn=9) {
    return fn != 9 ? fn(9) : 9
  }
  
  function plus(x) {
    return function(y) {
      return y+x
    }
  }
  function minus(x) {
    return function(y) {
      return y-x
    }
  }
  function times(x) {
    return function(y) {
      return y*x
    }
  }
  function dividedBy(x) {
    return function(y) {
      return Math.trunc(y/x)
    }
  }