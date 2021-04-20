// mine
Math.round = function(number) {
  let x = number % 1
  return x >= 0.5 ? number - x + 1 : number - x
}

Math.ceil = function(number) {
  return number % 1 ? number - (number % 1) + 1 : number
}

Math.floor = function(number) {
  return number % 1 ? number - (number % 1) : number
}



// codewars top
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};



// my fave
//unlike bitwise operators, this works for x >= 2147483648
Math.floor = function floor(x){
  return x - x % 1; 
}
//function calls are expensive, so...
Math.round = function round(x){
  return (x + 0.5) - (x + 0.5) % 1;
}
Math.ceil = function ceil(x){
  return x - x % 1 + !!(x % 1);
}