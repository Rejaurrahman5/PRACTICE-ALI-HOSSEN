/*javascript operator*/
// let a = 50;
// let b = 20;
// let c = a + b;
// console.log(c);


// let userInput = prompt('Enter a number');
// let number = parseInt(userInput);


// if (number % 2 === 0) {
//     console.log('${number} is even number');
    
// }
// else {
//     console.log('${number} is odd number');
// }

// 
// let p = '6';
// let q = 5;

// console.log(p===q);
// console.log(p==q);
// console.log(p <= q);
// console.log(p >= q);
// let a = 10;
// let b = 9;
// let t =a <= b? 'True' : false;
// console.log(t);

// if (a < b) {
//     console.log('true');
    
// }
// else {
//     console.log('false');
// }

//let firstName = 10;
//console.log(typeof firstName);

// if (typeof firstName === 'string'){
//     console.log('This is a string');
// }
// else {
//      console.log('This is a not string');
// }
//javascript objects

// const nameis = {
//     firstName: 'Raju',
//     model: 'Smart',
//     disain :function () {
//     return`My name is ${this.firstName} and model is ${this.model}`;
// }


// }
// console.log(nameis.disain());


// const obj1 ={
//     a:1,
//     b:2,
//     c:3,
//   }
//   const obj2 ={
//     p:1,
//     q:2,
//     r:3,
//   }

//   const obj3 ={
//     x:1,
//     y:2,
//     z:3,
//   }

//   const objFinal = Object.assign({},obj1,obj2,obj3)
 //const objFinal = {...obj1, ...obj2, ...obj3};
//   console.log(objFinal);
  // function person (first,last) {
  //   (this.firstName = first), (this.lastName = last);
  // }

  // const person1 = new person('Raju', 'Monsi');
  // person1.age = 21;

  // const person2 = new person('Subrena Islam', 'Rakhi');
  // person2.age = 20;

  // console.log(person1);
  // console.log(person2);

  

  function like() {
    document.getElementById('like').innerHTML = '<i class="fa-regular fa-thumbs-up"></i> liked';
  }

  function Keypress() {
    document.getElementById('text').innerHTML = 'Key presed';
  }

  function onLoad() {
    alert('Testing javascript onload');
    document.getElementById('text').innerHTML = 'Website Loeaded Properly';
  }
  
  document.getElementById('btn').onclick = function () {
    document.getElementById('btn').innerHTML = 'Subscribed';
  }
   
  

  function windowResize() {
    document.getElementById('textarea').style.height = '100px';
    document.getElementById('form').style.fontFamily = 'Courier New';
    document.getElementById('form').style.color = '#ff0000';
  }
  
  function onScroll() {
    document.getElementById('text').innerHTML = 'Scrolling';
  }
  
  document.getElementById('ul').addEventListener(
    'click',
    function (e) {
      console.log('UL Clicked');
      
    }
    true
  );

  document.getElementById('li').addEventListener(
    'click',
    function (e) {
      console.log('Li Clicked');
      
    }
    true
  );
  
  
  