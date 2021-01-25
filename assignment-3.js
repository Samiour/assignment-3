//https://github.com/Samiour/assignment-3/blob/main/assignment-3.js


function kilometerToMeter(kilometer) {
     
    if (kilometer <= 0) {
        console.log("Invalid input");
    }
   else{
    var convertToMeter = (kilometer * 1000); // 1 kilometer= 1000 meter
    return convertToMeter;
   }
    
}

    

    function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var watchPrice = 50; 
    var phonePrice = 100; 
    var laptopPrice = 500; 

    // total cost of watch, phone & laptop
    var totalCost = (watchPrice * watchQuantity + phonePrice * phoneQuantity + laptopPrice * laptopQuantity);

    return totalCost;
}




function hotelCost(day) {
    // cost of 1st 10 days
    var firstPart = 100;

    // cost of 11th days to 20th days 
    var secondPart = 80;

    // cost of 20th days to nth days
    var thirdPart = 50; 

    if (day <= 0) {
        console.log("Invalid input"); // for negative value
    }
    else if (day <= 10) {
        var cost1 = (day * firstPart); // total cost of 1st 10 days
        return cost1;
    }
    else if (day >= 11 && day <= 20) {
        var cost2 = ((10 * firstPart) + (day - 10) * secondPart); // total cost of 11th days to 20th days
        return cost2;
    }
    else {

        // total cost of 20th days to nth days
        var cost3 = (((10 * firstPart) + ((20 - 10) * secondPart)) + ((day - 20) * thirdPart)); 
        return cost3;
    }
}





var friends = ["Salam", "Kalam", "Malam", "Borkot", "Rofik"]; // storing the input string into friends variable
function megaFriend(friends) {

     // initialize first index as largest name
    var largestName = friends[0]; 

    for (var i = 0; i < friends.length; i++) {

        var elements = friends[i]; // capture the string elements

        // compare elements with the 1st index if they are larger or not
        if (elements.length > largestName.length) {
            largestName = elements;
        }
    }
    return largestName;
}