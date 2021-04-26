// mine. timed out 1200 ms
const findAll = (n,k) => {
  let matches = [];
  for (let x = 10**(k-1); x < 10**k; x++) {
    let digits = x.toString().split('').map(Number)
    if (digits.reduce((a,b) => a + b, 0) != n) continue
    if (digits.find((a, i, arr) => a > arr[i+1])) continue
    matches.push(x.toString())
  }
  return matches.length > 0 ? [matches.length, matches[0], matches.pop()] : []
}

// codewars top
function findAll(n,k,min=1) {
  if(n<min*k || n>9*k)
    return [];
  if(k===1)
    return [1,String(n),String(n)];
  var counter=0;
  var minimum="9".repeat(k);
  var maximum="0".repeat(k);
  for(var i=min;i<=9;i++){
    var current=findAll(n-i,k-1,i);
    if(current.length>0){
      counter+=current[0];
      if(i+current[1]<minimum)
        minimum=i+current[1];
      if(i+current[2]>maximum)
        maximum=i+current[2];
    }
  }
  return [counter,minimum,maximum];
}