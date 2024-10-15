// ***** forEach kullanımı ******


const Product = [
    "axe","sword","knife","bow","arrow"
]

// Product.forEach((item,key) => {
//     console.log(item,key);

// })

const ulDom = document.querySelector("#userList")

Product.forEach((item,index) => {
    const liDom = document.createElement('li')
    liDom.innerHTML = item
    ulDom.appendChild(liDom) 
})