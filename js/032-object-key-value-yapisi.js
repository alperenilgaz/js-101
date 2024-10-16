
let laptop = {
    brand : "Apple",
    model: "mac book pro",
    price: 3400,
    "2$":2,
}


// Dogru anahtar bilgisi olusturmak
console.log(laptop);
console.log(laptop.brand); 
console.log(laptop["model"]); 
console.log(laptop.model);
console.log(laptop.price);
console.log(laptop["2$"]);

// Anahtar bilgisine yeni deger eklemek

laptop.brand = "Asus"
console.log(laptop);

laptop["brand"] = "Del"
console.log(laptop);

// yeni bilgi eklemek

laptop.version = "10.5.6"
console.log(laptop);

// anahtar bilgisine ulasmak (keys) -> Object.keys(item)

let keys = Object.keys(laptop)

console.log(keys);

keys.forEach(item => {
    console.log(item);
    
})


// deger bilgisine ulasmak (values) -> Object.values(item)

console.log(
    Object.values(laptop)
);
