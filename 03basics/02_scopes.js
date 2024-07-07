//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "akshat"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);          //give error because it is out of scope

     two()

}

one()

if (true) {
    const username = "akshat"
    if (username === "akshat") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);             // throws error because it is out of its scope.      
}

// console.log(username);             // throws error because it is out of its scope.


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))            // if we define function like this then it doesn't throw an error .

function addone(num){
    return num + 1
}



addTwo(5)                            // but if we define a function like this then it throws an error.
const addTwo = function(num){
    return num + 2
}