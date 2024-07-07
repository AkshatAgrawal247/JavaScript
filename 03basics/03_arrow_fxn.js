const user = {
    username: "Akshat",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);                           // this keyword is used for current context
        // console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"                                  // here we change the context that's why it prints sam instead of akshat.
user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Akshat"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Akshat"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Akshat"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2                // it is implicit way to write a function and if you use the curly brackets then use of return is compulsion

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Akshat"})                  // here we return a object. 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()