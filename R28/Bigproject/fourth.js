// მეოთხე
let adminSale = 1/10; /* ანუ 10% */
let frequentClientSale = 1/5; /* ანუ 20% */
let studentSale = 1/2;  /* ანუ 50% */
let userBalance = 20; 
let cartTotal = 30;
let userIsAdmin = false;
let userIsFrequentClient = false;
let userIsStudent = true;
if (userIsStudent && userBalance - (cartTotal - cartTotal * studentSale) >= 0) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if (userIsFrequentClient && userBalance - (cartTotal - cartTotal * frequentClientSale) >= 0) {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
} else if (userIsAdmin && userBalance - (cartTotal - cartTotal * adminSale) >= 0) {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}