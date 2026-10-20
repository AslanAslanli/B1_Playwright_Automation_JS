let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;

function maxMinFinder(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
    let arr = [num1, num2, num3, num4, num5];
    let maxNum = num1;
    let minNum = num1;
    // arr.push(num1);
    // arr.push(num2);
    // arr.push(num3);
    // arr.push(num4);
    // arr.push(num5);

    for (const eachNum of arr) {
        if (eachNum >= maxNum) maxNum = eachNum;
        if (eachNum <= minNum) minNum = eachNum;
    }
    
    console.log(arr);
    return `max number is ${maxNum} and min number is ${minNum}`;
}

console.log(maxMinFinder(1, 2, 3, 4, 5));