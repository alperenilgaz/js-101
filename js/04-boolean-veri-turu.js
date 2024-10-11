// ***** Boolean Veri Turu ile Calismak *****

// 0 ve 1 ' i Anlamak ->

// let isActive = false // 0
// isActive = true // 1

// console.log(isActive);

let name;
let isName = Boolean(name)
console.log(isName);

Boolean("11") // true
Boolean("0") // true 
Boolean("") // false 

name = "user"
console.log("User Name:",Boolean(name));

// 0 , -0, null, false, Nan, undefined, ("") ->

Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true


// Not : Karar Yapilari kisminda anlatilacak
let userName = "alperen"
Boolean(userName.length>0) // true






