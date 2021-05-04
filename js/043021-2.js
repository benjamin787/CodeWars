// neither are mine. i did not understand the question
function chain(fns) {
  let Chain = function(val){
    this.execute = () => val;
  };
  for(let i in fns) Chain.prototype[i] = function (a, b) {
    let val = this.execute(),
        args = val === null ? [a, b] : [val, a];
    return new Chain(fns[i](...args));
  }
  return new Chain(null);
}

const chain = (fns, value) => Object.keys(fns).reduce((acc, key) =>
  Object.assign(acc, {
    execute: () => value,
    [key]: (...args) =>
      chain(fns, fns[key].apply(undefined, args.length < 2 && value ? [value, ...args] : args)),
  }), {});