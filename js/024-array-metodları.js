// cok kullanılan array metodları ve array icinde array

// Array içinde array

let female = ["sonay","hülya","selcan"]
let male = ["alperen","murat","ahmet"]

female.unshift(male)
console.log(female,"length :" ,female.length);
console.log(female[0][0]);


// Array icerisinden ogeye ayirmak -> splice
let items = [2, 3, 4, 5]

let newItems = items.splice(1,5)

console.log(newItems);

// array icersindeki ogenin index bilgisini bulmak ->indexOf

console.log(male.indexOf("murat"));

// array kopyalamak -> slice,[...ES6]
let day = ["monday","tuesday","saturday"]


// hatali kullanim
// let newDay = day
// newDay[0] = "friday"
// console.log(day,newDay);

// dogru kullanim
newDay = day.slice()
console.log(day,newDay);


newDay.push("friday")
console.log(day,newDay);




// iki array biligisini birlestirmek [...ES6,...ES6]

let allUsers = [...female,...male]
console.log(allUsers);

// array icersindeki bilgiyi stringe cevirmek -> toString,join

console.log(allUsers.toString());
console.log(allUsers.join("-"));

