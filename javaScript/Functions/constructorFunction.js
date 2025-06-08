// function greet(name){
//     console.log("Hello " + name);
// }

// greet("Sandip");

// oops concepts----------------------->

// function car(make , model , type , windows){
//     this.make = make;
//     this.model = model;
//     this .type = type;
//     this.windows = windows;
// }

// let tata = new car ("tata", "safari", "sedan", 2);
// console.log(tata);

// let toyota = new car ("toyota", "innova", "suv" ,"",2);
// console.log(toyota);

// function tea (type , sugar , milk){
//     this.type = type;
//     this.sugar = sugar;
//     this.milk = milk;
// }
// let chai = new tea ("chai", "sugar", "milk");
// console.log(chai);

// let coffee = new tea ("coffee", "sugar","pani");
// console.log(coffee);

// let car = {
//     model:"safari",
//     color:"red",
//    year:"2005",
//     start: function(){
//         return `${this.model} is started in ${this.year}`;
//     },
//     }
// console.log(car.start());

// class vehicle {
//   constructor(brand, doors, color, wheels, drive) {
//     this.brand = brand;
//     this.doors = doors;
//     this.color = color;
//     this.wheels = wheels;
//     this.started = function start() {
//       console.log(`${this.brand} is started`);
//     };
//   }
// }

// class car extends vehicle {
//   constructor(brand, doors, color, wheels) {
//     super(brand, doors, color, wheels);
//     this.brand = brand;
//     this.doors = doors;
//     this.color = color;
//     this.wheels = wheels;
//     debugger
//     this.started();
//   }
// }

// let tata = new car("tata", 4, "red", 4);
// console.log(tata);


// Arrow function-----------------------------------------------------------------------


const sum = (a,b) => a + b;
console.log(sum(2,3));


