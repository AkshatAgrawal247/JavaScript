// singleton                      // only made by constructor
// Object.create              //it is a constructor method for object creation.

// object literals          // by this singleton will never be created

const mySym = Symbol("key1")


const JsUser = {
    name: "Akshat",
    "full name": "Akshat Agrawal",
    [mySym]: "mykey1",                       // for defining it as a symbol , square brackets are compulsary
    age: 18,
    location: "Jaipur",
    email: "akshat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])           // most efficient method for accessing objects but generally we access the objects by dot operator.
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);                      //here string interpolation is used
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());