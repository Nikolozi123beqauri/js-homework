let x = 0;

for (let i = 1; i < 25000; i = i + 2) {
    x = i + x
}
console.log(x);