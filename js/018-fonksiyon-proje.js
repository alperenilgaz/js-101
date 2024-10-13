// butonlar ile sayaç yapalım

let counter  = 0

let counterDom = document.querySelector("#counter")
let increaseDom = document.querySelector("#increase")
let decreaseDom = document.querySelector("#decrease")

counterDom.innerHTML = counter

increaseDom.addEventListener("click",handleClick)
decreaseDom.addEventListener("click",handleClick)

function handleClick(){
    console.log(this.id);
    this.id === "increase" ? counter+=1 : counter-=1
    counterDom.innerHTML = counter
    
}
