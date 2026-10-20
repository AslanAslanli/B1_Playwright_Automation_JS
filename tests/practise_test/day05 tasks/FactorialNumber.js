let num = 5;

function factorialCalculator(num) {
  let returnNum = 1;
  if (num <= 0) {
    console.log("Only positive number");
    return 0;
  } else if (num === 1 || num === 2) {
    return num;
  } else {
    for (let i = num; i > 1; i--) {
      returnNum *= i;
    }
  }

  return returnNum;
}

console.log(factorialCalculator(num));
