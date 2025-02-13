// API calls are asynchronous

let url = "https://catfact.ninja/fact";

// fetch(url)    // returns a promise
// .then((res) => {
//     console.log(res);
//     //console.log(res.json());  // also return a promise
//    return res.json();
// })
//    .then((data) =>{
//         console.log(data.fact);
        
//     })
// .catch((err) => {
//     console.log("ERROR -",err);
    
// });





// using fetch with async and await

async function getFacts() {
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
   }
   catch(e){
    console.log("error -", e);
   }
   console.log("bye");
   
}

getFacts();

