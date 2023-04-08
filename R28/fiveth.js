// მეხუთე
let fuel = 200;
let igoetamdefuel = 10;
let goramdefuel = 20;
let xashuramdefuel = 30;
let qutaisamdefuel = 50;
let batumamdefuel = 80;
if (igoetamdefuel <= fuel) {
    console.log("იგოეთამდე ჩაგიყვნს");
} else if (goramdefuel <= fuel) {
    console.log("გორამდეც მიგაგორებს");
} else if (xashuramdefuel <= fuel) {
    console.log("xashuramdec migiyvans") ;
} else if (qutaisamdefuel <= fuel) {
    console.log("maqamdec miva");
} else if (batumamdefuel <= fuel) {
    console.log("batumamdec chava");
}
// მეექვსე
if ((fuel - batumamdefuel) >= 0 ) {
    console.log(`კიდევ დაგრჩა ${fuel - batumamdefuel} საწვავი`);
}