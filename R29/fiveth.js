// მეხუთე
let userLoggedIn = true;
let userFirstName = "მიშა";
let userIsFemale = false;
if (userLoggedIn) {
    if (userIsFemale == true) {
        userIsFemale = "ქალბატონო"
    } else {
        userIsFemale = "ბატონო"
    }
    console.log(`გამარჯობა ${userIsFemale} ${userFirstName}`)
} else {
    if (userIsFemale == true) {
        userIsFemale = "ქალბატონო"
    } else {
        userIsFemale = "ბატონო"
    }
    console.log(`ნახვამდის ${userIsFemale} ${userFirstName}`);
}