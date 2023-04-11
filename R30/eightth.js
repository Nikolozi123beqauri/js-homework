let x = 0;
for(let i = 1; i <= 300; i++) {
    if (300 % i == 0) {
        console.log(i);
        x += i;
    }
}

console.log(x);