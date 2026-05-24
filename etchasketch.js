let container = document.querySelector(".container");
let divs = document.createElement("div");
let allDivs = document.querySelector("div")
let btn = document.querySelector("button")


btn.addEventListener("click", (e) => {
   
      
    if (typeof(x) !== Number) {
    x =16
}
if (x*x >= 100) {
    x = 16
}
 if (x <= 0)   {
    x = 16
 }
 else {
     x =Number(prompt("Number Please"))
 }
    for(let i = 0; i <=  x * x ; i++) {
     
    
        let divs = document.createElement("div");
   
    container.appendChild(divs);
   divs.addEventListener("mouseenter", (e) =>{
divs.style.backgroundColor= "blue"

})}

})



window.addEventListener("load",  (event) => {
    let x = 1
  for(let i = 0; i <=  x ; i++) {
     
    
        let divs = document.createElement("div");
   
    container.appendChild(divs);
   divs.addEventListener("mouseenter", (e) =>{
divs.style.backgroundColor= "blue"


})}

});



    
 





btn.textContent= "Size Input Please"

container.style.backgroundColor = "red"
console.log(typeof(container))
console.log(typeof(allDivs))
