 // ***** object ve array destructuring nasıl kullanılır *****

 let settings = {
    userName : "alperen",
    password : "1234",
    isActive : false,
    ip : "192.168.1.1",
    serverName : "alperenilgaz.github.io"
 }

 // obje icindeki bilgilerin tek seferde cikarilması

//  let username = settings.userName
//  console.log(username);

// rename & destructuring

// let {userName : user, password , isActive, ip:serverIp,serverName} = settings

// console.log(user,password,isActive,serverIp,serverName);


// obje icindeki bazi bilgilerin cikarilmasi

// let {userName : username2, password : password2 , isActive:isActive2, ...newSettings } = settings

// console.log(newSettings);


// objenin destructuring ile  kopyalanamasi

// hatali kullanım

// let settings2 = settings
// settings2.userName = "mehmet"

// console.log("settings",settings);
// console.log("settings2",settings2);


// dogru kullanim

let settings2 = {...settings}

settings2.userName = "mehmet"

console.log("settings",settings);
console.log("settings2",settings2);


// dizilerde kullanım 

let number = [1, 2, 3, 4]

let [number1,number2,...otherNumber] = number

console.log(number1,number2,otherNumber);

