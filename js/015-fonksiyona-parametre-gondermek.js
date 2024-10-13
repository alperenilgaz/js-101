// 1 : Bir fonksiyon bir veya daha fazla parametre alabilir veya  hiç almayabilir
// 2 : Bir fonksiyon disari bilgi gonderebilir(return) veya gondermeyebilir .


 let userName = "whakawiri" 

function greeting (userName="",lastName = "") {

    console.log(`merhaba ${userName} ${lastName}`);
    
}

greeting(userName,"ilgaz") // boş parametre göndermek


function greetings2(firtsname,lastName) {
    let info = `merhaba ${firtsname} ${lastName}`
    return info
}

// tekrar info tanımlanması hata verir mi ????
let info = greetings2("alperen","ilgaz")
console.log(info);


function domIdWriter(id,info){
    let domObject = document.querySelector(`#${id}`)
    // let domObject = document.querySelector(`${id}`) hatalı kullanım neden ????
  
    domObject.innerHTML = info
}

// domIdWriter("info","alperen") 
// domIdWriter('info',greetings2("alperen","ilgaz"))




