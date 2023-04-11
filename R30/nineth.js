let x = 79;
let isPrime = true;

for(let i = 2; i <= x; i++) {
    if(x % i == 0) {
        isPrime = false;
    }
}

if(isPrime) {
    console.log(`${x} არის მარტივი რიცხვი`)
} else {
    console.log(`${x} არ არის მარტივი რიცხვი`)
}