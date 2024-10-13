
// https://www.w3schools.com/jsref/dom_obj_event.asp

let info = document.querySelector("#info")

info.addEventListener("click",domClick)

function domClick(){
    // console.log("tıklandı");
    // console.log(this);
    // console.log(this.innerHTML);
    // console.log(this.innerHTML = "degisen bilgi");
    //  this.style.color = "red"
     this.style.color == "red" ? this.style.color="black" : this.style.color = "red"

    
    
    
}