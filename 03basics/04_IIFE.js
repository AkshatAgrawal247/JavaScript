// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// here semicolon is important 

//   ( ) ()       HERE FIRST PARENTHESIS IS FOR DEFINATION AND SECOND IS FOR EXECUTION. and global scope ke pollution ko hatane ke liye we use IIFE. 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('akshat')
