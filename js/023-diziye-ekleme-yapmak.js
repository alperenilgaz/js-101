// Array yapisina oge eklmek ve istenilen ogenin cikarilmasi

// dizi tanımlayalım
let items = [10, 20, 30, 40]
console.log("items ilk hali : ",items);

// sona eleman eklemek -> push

items.push(50)
console.log("50",items);

// basa oge eklemek -> unshift

items.unshift(0)
console.log("0",items);

// sondaki ogeyi cikarmak -> pop

let lastItem = items.pop()

console.log("lastItem :",lastItem,"item :",items);

// bastaki ogeyi cıkarmak -> shift

let firstItem = items.shift()
console.log("firstItem :",firstItem,"item :",items);


// ilk ogenin degistirilmesi

items[0] = 5
console.log(items);

// son ogenin degistirilmesi

items[items.length-1] = 50
console.log(items);

