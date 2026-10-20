let num = 6;

if (num % 3 == 0) {
    if (num % 5 == 0) {
        console.log("fizz buzz");
    } else{
        console.log("fizz");
    }
} else if (num % 5 == 0){
    console.log("bizz");
} else console.log(num);