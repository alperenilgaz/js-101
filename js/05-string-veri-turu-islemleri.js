// ****** String Veri Turu Islemleri *******

let mail = 'alperenilgaz3@gmail.com'
let firstName = "alperen"
let lastName = 'ilgaz'

// string karakter sayisi 

console.log(mail.length);

// ilk karakteri bulmak

console.log(firstName[0]);
console.log(firstName.charAt(0));



// buyuk harf / kucuk harf

// firstName = firstName.toLowerCase()
// console.log(firstName);

// firstName = firstName.toUpperCase()
// console.log(firstName);



// String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search

console.log(mail.search("@"));
console.log(mail[13]);

console.log(mail.search('xyz')); // -1


// belli bir yere kadar al -> slice


let DOMAIN = mail.slice(mail.search('@')+1)
console.log(DOMAIN);



// bilgiyi degistir -> replace

mail = mail.replace('gmail.com','github.io')
console.log(mail);


// aradigim bilgi var mi ? -> includes

mail.includes('xyz') // false
mail.includes('@') // true

// istedigim bilgiyle basladi mi ? bitti mi ? -> startsWidth, endsWith

console.log(mail.endsWith('io'));

// Ilk harflerini buyuk yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName);



