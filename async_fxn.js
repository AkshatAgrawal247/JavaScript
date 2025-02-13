async function greet(){
    return "hello world";   // returns a promise
}

let hello = async () => {};   // returns a promise


// default promise in fulfilled state but when an error comes in function then its promise is in rejected state

// eg.
// async function greet(){
//     throw " some random error";
//     return "hello!";
// }

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result);
    
})
.catch((err)=>{
    console.log("promise was rejected with err:",err);
    
});