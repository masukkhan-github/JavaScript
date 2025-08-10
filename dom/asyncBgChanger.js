// const body = document.querySelector("body");

// let red,green,blue;

// let id;
// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");

// stop.addEventListener("click", () => {
//   clearInterval(id);
//   id = null;
// });

// start.addEventListener("click", () => {
//     if(!id){

//     }
//   id = setInterval(() => {
//     red =(Math.floor(Math.random()*(255-1+1)+1))
//     green =(Math.floor(Math.random()*(255-1+1)+1))
//     blue =(Math.floor(Math.random()*(255-1+1)+1))
//     body.style.backgroundColor = `rgb(${red},${green},${blue})`
//   }, 1000);
// });


//optimized way

const randomColor = ()=>{
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
       color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

// console.log(randomColor())

let id;

const changeColor = function(){
    if(!id){
        id = setInterval(changeBgColor,1000)
    }
   

   function changeBgColor (){
        document.body.style.backgroundColor = randomColor();
   }
    
}

const stopChanging = function(){
    clearInterval(id)
    id = null
}

document.querySelector('#start').addEventListener('click',changeColor)

document.querySelector('#stop').addEventListener('click',stopChanging)
