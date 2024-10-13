// ***** Arrow Function Kullanimi ***** 


function hello(firstName) {
     console.log(`merhaba ${firstName}`);
}

hello("Alperen")

const arrowFunctionV1 = firstName => console.log(`merhaba ${firstName}`);
arrowFunctionV1("Alp")

const arrowFunctionV2 =  (firstName) => console.log(`merhaba ${firstName}`);
arrowFunctionV2("ilgaz")


const arrowFunctionV3 = (firstName,lastname) => console.log(`merhaba ${firstName} ${lastname}`);
console.log(arrowFunctionV3);


const arrowFunctionV4 = (firstName,lastname) => {
    let info = `merhaba ${firstName} ${lastname}`
    return info
}

let info = arrowFunctionV4("alperen","ilgaz")
console.log(info);


// Rainbow Brackets Extensions
