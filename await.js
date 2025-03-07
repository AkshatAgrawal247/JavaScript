// pauses the execution of its surrounding async function 
// until the promise is settled (resolved or rejected)

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("Promise rejected");
//       }
//       h1.style.color = color;
//       console.log(`Color changed to ${color}!`);
//       resolve("Color changed!");
//     }, delay);
//   });
// }
// async function demo(){ 
// try{
//     await colorChange("violet",1000);
//     await colorChange("indigo",1000);
//     await colorChange("green",1000);
//     await colorChange("yellow",1000);
//     await colorChange("orange",1000);
// }
//  catch(err){
//     console.log("error caught");
//     console.log(err);
    
    
//  }
// }


function getNum() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        resolve();
      }, 1000);
    });
  }
  
  async function demo() {
     await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
  }

  demo();