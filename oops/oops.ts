// =====================================================// set of rules for code//============================================================//
// inheritance(shaning of )
// encapsulatio()
// abstraction()
// polymorphism()


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

class Animal{
    name:string

    constructor(animalName:string){
        this.name= animalName
    }
    walk(){
        console.log(this.name,"Is walking")
    }
    
}

 class Dog extends Animal {
    woof(){
        console.log(this.name,"bhow bhow woof woof")
    }
    
 }

 let d1 = new Dog("tommy")
 console.log(d1.name)
 d1.walk()

 let d2 = new Dog("kutta")
 d2.woof()


//  class Cat extends animal{
//     meow(){
//         console.log("meow meow")
//     }
    
//  }

//  let c1 = new Cat("billo")
//  console.log(c1.name);
//  c1.meow();