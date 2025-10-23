// javascript data type
// let firstName = 'Raju';
// firstName = 'airin'
// let fullName = 'My Name is Raju';
// let finalName = `My Name is firstName`;
// let age = 20;
// let age2 = 25;
// let calculation = age + age2 + firstName + age + age2;

// console.log(calculation);
// console.log(typeof firstName);
// 
// let fruits = ['Apple', 'Lemon', 'Peer', 'Oranges'];
// console.log(fruits[0]);
// console.log(typeof fruits);

//javascript Function
// function myFunction(fullName,age,dateofbirth) {
//     console.log('Hello ' + fullName +' I am '+ age + ' ' + dateofbirth);
// }
// myFunction('Raju',21,2005);

// function isSubscribed() {
//     console.log('Subscribed');
    
// }
// document.getElementById('btn').addEventListener('click', isSubscribed);
// let maths = function (x,y) {
//     console.log('Testing if I am working of not');
//     return x * y;
    

// }
// console.log(maths(3,4));
// console.log(maths(5,6));

// let numbers = [4,5,6,7,8];
// let sqNumbers = numbers.map(function (number){
//     return number * number;
// });

// console.log(sqNumbers);
// let add = (x,y) => x + y;

// console.log(add(5,6));

// function greet(firstName) {
//     function sayHello() {
//        return sayHello();
        
//     }
    
//      console.log('hello '+ firstName);
// }

// greet('Raju');
//java object
const newSymb = Symbol('Key1');
const mobileModel = {
   brand: 'samsung',
   model: 's24',
   processor: 'snap dragon',
   'selfie camera MP': 32,
   [newSymb]: 'MyKey1',
   brandModel: function () {
      return `Mobile brand is ${this.brand}and model is ${this.model}`;
   },
   battray: {
      mah : 5000,
   },
}

mobileModel.model = 's25 ultra';

console.log(mobileModel.model);

console.log(Object.keys(mobileModel));
console.log(mobileModel.battray.mah);





