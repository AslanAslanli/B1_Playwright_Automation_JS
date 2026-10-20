/*
Task #3 - PrintLettersCombination

    Create a file called PrintLettersCombination.js in your Practice_Programming project and inside the day##_tasks package 

        Task:
                    Write a function and gets two letters (Ex: z, v)
                    And with loop displays all possible combinations of two letters
                    The combinations should be displayed in descending alphabetical order:
                
                    zz
                
                    zy
                
                    zx
                
                    zw
                
                    zv
                
                    yz
                
                    ....
                
                    vv
*/
let char1 = "z";
let char2 = "v";

function printLetters(char1 = "", char2 = "") {
  let firstNum = char1.charCodeAt(0);
  let secondNum = char2.charCodeAt(0);

  for (let i = firstNum; i >= secondNum; i--) {
    for (let j = firstNum; j >= secondNum; j--) {
      console.log(String.fromCharCode(i) + String.fromCharCode(j));
    }
  }
}

printLetters("z", "v");
