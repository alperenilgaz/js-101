const Users =["AYSE","MehMet","Tugce","aKsel"]
// userName = icindeki normal isim kalsın
// shortName = icindeki ilk harf buyuk olsun A.
//newName = icindeki ilk harf buyuk olsun
Users.map(item => {
    console.log(item);
    
})

// const updatedUser = Users.map(user => user.toLowerCase() )
// console.log(updatedUser);

// 1. yöntem

// const userOBJ = Users.map(item => {
//     return{
//         userName : item, shortName : item[0], newName : `${item[0].toLocaleUpperCase()}${item.slice(1).toLowerCase()}`
//     }

    
// })       
// console.log(userOBJ);

//  2. yöntem


const userOBJ = Users.map(item => (
    {
        userName : item, shortName : item[0], newName : `${item[0].toLocaleUpperCase()}${item.slice(1).toLowerCase()}`
    }
)
)
console.log(userOBJ);


// return ifadesi kullanılmıyor çünkü kısa parantez objenin otomatik olarak döndürülmesini sağlıyor.