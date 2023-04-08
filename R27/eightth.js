let capsuleCount = 4;
let capsulePrice = 2;
let userBalance = 40;

let creditCardStatus = userBalance >= capsulePrice;
const paymentComplete = capsuleCount > 0 && creditCardStatus;
console.log(paymentComplete);