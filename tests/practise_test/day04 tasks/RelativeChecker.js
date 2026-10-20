let name1 = "James Bond";
let name1Array = name1.trim().split(" ");
let name2 = "Jamie Bond";
let name2Array = name2.trim().split(" ");

if (name1Array[1] === name2Array[1]) {
  console.log("Related");
} else {
  console.log("Not related");
}

let name3 = "James Bond";
let name4 = "Alex Benji";
