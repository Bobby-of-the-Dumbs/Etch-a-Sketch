let container = document.querySelector(".container");
let divs = document.createElement("div");
let allDivs = document.querySelector("div")
let btn = document.querySelector("button")
function gridSize(x) {
     x = Number(prompt("Enter a number for your grid under 100 and is postitive of course" ))
    if (x > 100) {
        console.log("BUZZZ, to0large")
        return null
    }
    else if (x <= 0){
       console.log("BRHZZ, too small, are you listening?!")
    }
    else if (x !== Number(x)) {
        console.log("BUM")
        return null
    }
    else {
  return Number(x*x)}

}

btn.addEventListener("click", (e) => {
    allDivs.remove()
   
 for(let i = 0; i <=  gridSize(); i++) {
 let newdivs = document.createElement("div");
   
    container.appendChild(newdivs);
   newdivs.addEventListener("mouseenter", (e) =>{
newdivs.style.backgroundColor= "blue"
container.style.backgroundColor = "red"

})} 




})





 for(let i = 0; i <= 256; i++) {
 let divs = document.createElement("div");
   
    container.appendChild(divs);
   divs.addEventListener("mouseenter", (e) =>{
divs.style.backgroundColor= "blue"

})} 





btn.textContent= "Size Input Please"

container.style.backgroundColor = "red"
console.log(typeof(container))
console.log(typeof(allDivs))
