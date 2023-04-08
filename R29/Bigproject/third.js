let maxScore = 100;
let barrier = 60;
let studentScore = 70;
let z = barrier;
let x = studentScore;
let y = maxScore; 
if (studentScore > barrier || studentScore == maxScore) {
    console.log(`გილოცავთ თქვენ გადალახეთ ${z} ქულიანი ბარიერი ${x}/${y} ქულით`);
} else if (studentScore < barrier) {
    console.log(`თქვენ სამწუხაროდ ვერგადალახეთ ${z} ქულიანი ბარიერი ${x}/${y} ქულით`);
}