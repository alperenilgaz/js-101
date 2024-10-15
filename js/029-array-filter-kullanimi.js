// ****** array filter kullanimi *******

const Products = ["mic","mouse","keyboard","ssd","ram","monitor"]

const filterProduct = Products.filter(item => item[0] === 'm')
console.log(filterProduct);


// aktif kullaniclar

const USERS = [
    {fullName : "alperen",isActive : true},
    {fullName : "ahmet",isActive : false},
    {fullName : "ali",isActive : true},
    {fullName : "veli",isActive : false},
    {fullName : "asım",isActive : true}
]

const filterUsers = USERS.filter(user => user.isActive === true)

console.log(filterUsers[0].fullName);
