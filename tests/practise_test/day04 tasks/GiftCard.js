let balance = 100;
let inputItem = "Charger";

let itemList =  ["Blanket", "Charger", "Hat", "Headphones", "Laptop", "Pants", "Pillow", "Smartphone", "Socks", "USB cable"];
let priceList = [60,          25,       25,        30,         200,     50,      40,         1000,       5,          10    ];

if (!itemList.includes(inputItem)) console.log("Invalid item!");

else {
  for (let i = 0; i < itemList.length; i++) {
    if (inputItem === itemList[i]) {
      if (balance >= priceList[i]) {
        console.log("Thank you for your purchase. Your current balance is " + (balance - priceList[i]));
        break;
      } else console.log("Sorry not enough funds on your gift card!"); }}}
