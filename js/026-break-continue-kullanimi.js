// ***** break ve continue Kullanimi


let counter = 0
// break kullanimi

// for(; counter<10; counter++){
//     console.log(counter);
//     if(counter === 5){
//         break
//     }
    
// }


// continue kullanimi

// for(; counter<10; counter++){

//     if(counter === 5){
//         continue
//     }

//     console.log(counter);
    
// }

let LOREM_LIST =[
    "lorem","Ipsum","Dolor"
]


const UL_DOM = document.querySelector("#userList")

let index = 0

for(; index<LOREM_LIST.length; index++){
    if(LOREM_LIST[index] === "Ipsum"){continue}
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
}