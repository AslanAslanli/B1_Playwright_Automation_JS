/*
write a function that will print all the alphabet letters in lowercase from 'a' to 'z' when the function is called

	write a function that will print all the alphabet letters in uppercase from 'A' to 'Z' when the function is called

	write a function that will print all the alphabet letters backwards in lowercase from 'z' to 'a' when the function is called

	write a function that will print all the alphabet letters backwards in uppercase from 'Z' to 'A' when the function is called

	write a function that accepts a number and adds all the numbers from 1 - to that number

	write function that accepts a number and will check all the numbers from 1 - to that bumber and apply fizzbuzz logic to it 
        FizzBuZZ logic is:
    		- For numbers which are divisible by 3, print "Fizz" instead of the number. 
    		- For numbers which are divisible by 5, print "Buzz" instead of the number
    		- For numbers which are a divisible by both 3 and 5, print "FizzBuzz" instead of the number
*/
let str1 = 'a';
let str2 = 'z';

function allLower() {
  for (let i = str1.charCodeAt(0); i <= str2.charAt(0); i++) {
    console.log(i);
    console.log(String.fromCharCode(i));
  }
}

allLower();
