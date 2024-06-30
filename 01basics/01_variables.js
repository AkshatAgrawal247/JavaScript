const accountId = 140069   
let accountEmail = "abcd@google.com"
var accountPassword = 12345
accountCity = "Jaipur"
let accountState;

// accountId = 2   // throws error because constant value can not be changed.
accountEmail = "cmkssudb@gmail.com"
accountPassword = 43342
accountCity = "delhi"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountId , accountEmail , accountPassword , accountCity ,accountState]);    // new method for printing