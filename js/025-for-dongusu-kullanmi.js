// For dongusu kullanimi

let users = ["Lorem","Ipsum","Dolor"]

// let index = 0
// for( ; index<10 ; index++){
//     console.log(index);
    
// }

const userListDom = document.querySelector("#userList")


for(index = 0 ; index < users.length; index++){
    const liDom = document.createElement('li')
    liDom.innerHTML = users[index]
    userListDom.appendChild(liDom)
}