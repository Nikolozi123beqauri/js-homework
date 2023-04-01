// fiveth
let presidentKey = true;
let primeMinisterKey = true;
let generalOfArmiesKey = true;
let masterKey = false;
const bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey) || !masterKey
console.log(bombWillLaunch);