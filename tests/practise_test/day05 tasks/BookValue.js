let str = `Java textbook By James. Chapter 1 datatypes and variables. Chapter 2 conditional statements.
                        chapter 3 String manipulation. Chapter 4 Loops. Chapter 5 Arrays. Chapter 6 Methods. chapter 7 ArrayList.
                        chapter 8 instance and static. Chapter 9 Constructors. Chapter 10 Encapsulation and Inheritance.
                        Chapter 11 Abstraction and Polymorphism. Chapter 12 Exceptions. Chapter 13 Collections. Chapter 14 Learn `;

function wCounter(str) {
  let counter = 0;

  for (let index = 0; index < str.length; index++) {
    if (str.toLowerCase().substring(index).startsWith("chapter")) {
      counter++;
    }
  }

  return counter;
}

console.log(wCounter(str));
