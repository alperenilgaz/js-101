// localStorage islemleri

let user = {username : "alperen", isAdmin: true}
console.log(user);

// localStorage.setItem("userInfo",user)

// let userInfo = localStorage.getItem("userInfo")

// console.log(userInfo);


localStorage.setItem("userInfo",JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")
userInfo = JSON.parse(userInfo)

console.log(userInfo);
