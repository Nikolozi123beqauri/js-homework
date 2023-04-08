// მეორე
let userBalance = 50;
let cartTotal = 30;
let x = cartTotal - userBalance;
if (userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if (userBalance < cartTotal) {
    console.log(`თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ ${x} ლარი ანგარიშზე `);
}