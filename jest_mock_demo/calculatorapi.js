function getNumberFromAPI() {
    // this function simulates an API call that returns a number
    return 42;
}
function calculateTotal(){


    const number = getNumberFromAPI();
    return number + 10; 
}
module.exports = { getNumberFromAPI, calculateTotal };
