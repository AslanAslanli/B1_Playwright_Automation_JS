let str = "fiven";
let str2 = "fiven";

if (str.length%2 == 0) console.log("Middle char is: " + str.substring(str.length/2-1, str.length/2+1));
else console.log(str.charAt(str.length/2));