//  objecti icinde nasıl metot ekleriz


let user1 = {
    firstName : "Alperen",
    lastName : "ilgaz",
    score  : [1, 2, 3, 4],
    isActive : true,
    shortName : function () {
        return  `${this.firstName[0].toUpperCase()}${this.firstName.slice(1).toLowerCase()} ${this.lastName}`
    }
}

console.log(user1.shortName());
