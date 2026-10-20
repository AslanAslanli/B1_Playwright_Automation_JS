let receiptHeader =`
****************************
    WELCOME TO THE STORE
****************************
-------------------------`;

let cakePrice = 24;
let waterPrice = 3.99;
let appleJuicePrice = 7.5;
let breadPrice = 4.25;

let mainBody = `
Cake             $${cakePrice} 
Water            $${waterPrice}
Apple Juice      $${appleJuicePrice}
Bread            $${breadPrice}
-------------------------`;

let totalAmount = cakePrice + waterPrice + appleJuicePrice + breadPrice; 
let tax = totalAmount * 0.1;
let grandTotal = totalAmount + tax;

let totalPrintSection = `
TOTAL AMOUNT:    $${totalAmount}
TAX:             $${tax}
GRAND TOTAL:     $${grandTotal}
`;

let endingSection = `
-------------------------
*******THANK YOU*********
`;                        
console.log(receiptHeader + mainBody + totalPrintSection + endingSection);



