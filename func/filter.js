// const arr = [1,7,9,3,2];

// const fil = arr.filter(a => a>6);
 
// console.log(fil);

function makeAdder(x) {
    return function (y) {
      return x - 2;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(0)); // 7
  console.log(add10(2)); // 12
  