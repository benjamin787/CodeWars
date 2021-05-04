// GREATLY enjoyed this one
const sumIntervals = intervals => {
  let compact = intervals.reduce((memo, interval) => {
    if (memo) {
      memo = memo.reduce((acc, int) => {   
        if (
          interval[0] < int[0] &&
          interval[1] > int[1]
          ) int[0] = interval[0], int[1] = interval[1]
        else if (
          interval[0] <= int[1] &&
          interval[0] >= int[0] &&
          interval[1] > int[1]
          ) int[1] = interval[1]
        else if (
          interval[1] <= int[1] &&
          interval[1] >= int[0] &&
          interval[0] < int[0]
          ) int[0] = interval[0]
        acc.push([int[0], int[1]])
        return acc
      }, [])
    }
    
    return memo.some(x => x[0] <= interval[0] && x[1] >= interval[1])
      ? memo
      : memo.push(interval), memo
  }, [])
  let set = new Set(compact.map(JSON.stringify))
  return Array.from(set).map(JSON.parse).reduce((sum, int) => sum + int[1] - int[0], 0)
}

//not mine below


// efficiency issues?
function sumIntervals(intervals){
  var numbers = {};
  intervals.forEach(function(x) {
    for (var i = x[0]; i < x[1]; i++) {
      numbers[i] = i;
    }
  });
  return Object.keys(numbers).length;
}