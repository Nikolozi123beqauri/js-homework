// nineth
let availableRooms = 10;
let roomPrice = 50;
let discount = 20/100;
let userBalance = 300;
let userHasDiscount = true;
let userRoomCount = 5;
if (userHasDiscount) {
    paymentComplete = availableRooms >= userRoomCount && userBalance >= userRoomCount * (roomPrice - (roomPrice * discount));
} else {
    paymentComplete = availableRooms >= userRoomCount && userBalance - userRoomCount * roomPrice;
}

