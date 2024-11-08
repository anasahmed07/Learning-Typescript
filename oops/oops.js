// =====================================================// set of rules for code//============================================================//
// inheritance(shaning of )
// encapsulatio()
// abstraction()
// polymorphism()
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.class(it is the blueprint of objects,used to make objects/types)
// 2.object
// class House {
//   readonly houseNumber: string;
//   ownerName: string;
//   constructor(hNumber:string,oName:string){
//     this.houseNumber = hNumber
//     this.ownerName = oName
//   }
//  lift(){
//     console.log("up and down");
// }
// }
//  let h1 = new House("A123","anas");
//  let h2 = new House("B123","azhar");
// //  h1.ownerName="Athar";*/(can change outside class)
// //  h1.houseNumber="C123"(cannot change outside class bcz its readonly)
//  console.log(h1);
//  console.log(h2);
//  h1.lift()
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    Animal.prototype.walk = function () {
        console.log(this.name, "Is walking");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function () {
        console.log(this.name, "bhow bhow woof woof");
    };
    return Dog;
}(Animal));
var d1 = new Dog("tommy");
console.log(d1.name);
d1.walk();
var d2 = new Dog("kutta");
d1.woof();
d2.woof();
//  class Cat {
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     meow(){
//         console.log("meow meow")
//     }
//  }
//  let c1 = new Cat("billo")
//  console.log(c1.name);
//  c1.meow();
