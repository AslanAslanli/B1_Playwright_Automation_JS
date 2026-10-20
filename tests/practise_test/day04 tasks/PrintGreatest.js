let num1 = 4;
let num2 = 8;
let num3 = 1;
let maxNum;

if (num1 > num2) {
  if (num1 > num3) maxNum = num1;
  else maxNum = num3;

} else {
  if (num2 > num3) maxNum = num2;
  else maxNum = num3;
}

console.log(maxNum);
