


// let user = "sandip";
// let anotherUser = "sandip";

// if(user == anotherUser) {
//   console.log("Same user");
// }else{
//     console.log("not same user");
// }


// const fruits = ["banana" , "Apple", "Cherry"];

// for (let fruit of fruits){

//     console.log(fruit);
// }

// const name = "sandip yadav"

// for (letter of name){
//     console.log(letter);
// }


// const person = {
//     name : 'sandip',
//     surname: 'yadav',
//     age : 22 ,
//     city : 'gujarat'
// };

// for (key in person){
//     console.log( key,': ', person[key]);
// }

// ----------------------------------------------------forEach Loop------------------------------------------------

// const arr = ["Sandip", "yadav" , "Saeculum"];

// arr.forEach((name,index) => {
//     console.log(`${index} : ${name}`);  
// });

// const arr = [10,20,30,40,50];

// const b = arr.map((num) => num *10);
// console.log(arr);

// console.log(b);
const arr = [
  { Fname: "sandip", lname: "yadav" },
  { Fname: "uttam", lname: "gupta" },
  { Fname: "shivang", lname: "bhargav" },
];

const b = arr.map((person) => person.Fname + " " + person.lname);
console.log(b); 