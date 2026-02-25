// let score = prompt("Enter your grade");


// if (score >=80 && score <= 100){
//     console.log("Your grade is: A");
// }else if (score >=70 && score <= 79){
//     console.log("Your grade is: B");
// }else if (score >=60 && score <= 69){
//     console.log("Your grade is: C");
// }else if (score >=50 && score <= 59){
//     console.log("Your grade is: D");
// }else{
//     console.log("Your grade is: F");
// }

//Printing even number
// for(let i = 1;i<=100;i++){
//     if (i % 2 ==0){
//         console.log("Even number:",i);
//     }
// }

//generating a username
// let str = prompt("Enter your name: ");
// let lowerCase = str.toLowerCase();
// let count = 0;
// count = str.length;
// final_str = str.replace(" ", "");
// let username = `@${lowerCase}${count}`;
// console.log(username);

//Using loop to print values inside a array
// let info = ["Ujwal Shrestha", 19, "Kalesti", 9824171711];
// for(let i of info){
//     console.log(i);
// }

//practise qn
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let mark of marks){
//     sum += mark; 
// }
// let average = sum/marks.length;
// console.log("The average of the entire class is: ", average);

// let prices = [250, 645, 300, 900, 50];
// let i = 0;
// for(let price of prices){
//     console.log(`value at index ${i} = ${price}`);
//     let offer  = price * 0.1;
//     prices[i] = prices[i] - offer;
//     console.log(`value afetr offer = ${prices[i]}`);
//     i++;
// }

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] /10;
//     items[i] -= offer;
// }
// console.log(items);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let remove = companies.shift();
// console.log(companies);
// let addRemove = companies.splice(1, 1, "Ola");
// console.log(companies);
// let add = companies.push("Amazon");
// console.log(companies);

// const arrowMulti = (a,b) => {
//     console.log(a+b);
// };

// function Vowel(names){
//     let count = 0;
//     for(let final of names){
//         let name = final.toLowerCase(); 
//         if (name == "a" || name == "e" || name == "i" || name == "o" || name == "u"){
//            count++; 
//         }
//         }
//         console.log(count);
// }
// Vowel("Ujwal Shrestha");

// const Vowel = (names) =>{
//     let count = 0;
//     for(let final of names){
//         let name = final.toLowerCase(); 
//         if (name == "a" || name == "e" || name == "i" || name == "o" || name == "u"){
//            count++; 
//         }
//         }
//         return count;
// };
// Vowel("Ujwal Shrestha");

// let arr = [1,2, 3, 4, 5];
// arr.forEach(function printSq(val){
//     console.log(val ** 2);
// })
// let arr = [1,2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val ** 2);
// });

// let marks = [20, 90, 93, 40, 50];
// let filtered = marks.filter((val) => {
//     return val >= 90;
// });
// console.log(filtered);

// let n = prompt("Enter a number: ");
// arr = [];
// for (let i = 1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(sum);
// let product = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log(product);

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// let text = document.querySelector("h2");
// text.innerText =  text.innerText + " from Apna College student";

// let text = document.querySelectorAll(".className");
// // text[0].innerText = "kdksd";
// // text[1].innerText = "kdksd";
// // text[2].innerText = "kdksd";
// let idx = 1;
// for(div of text){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// let btn = document.createElement("button");
// btn.innerText = "Click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// const newbtn = document.querySelector("body");
// newbtn.prepend(btn);

// let paragraph = document.querySelector("p");
// paragraph.classList.add("content");  //class list make changes without removing previous class properties
// let print = paragraph.getAttribute("class");
// console.log(print);
// paragraph.setAttribute("class", "content");


// let modebtn = document.querySelector("#mode");
// let currMode = "light";
// modebtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";
// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

// const user = {
//     name: "Ujwal",
//     age: 19,
//     country: "Nepal"
// };
// const {name, age} = user;
// console.log(name); // Ujwal
// const { name: userName } = user;
// console.log(userName);
// const { city = "Pokhara" } = user;
// console.log(city); // Pokhara

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2);

// const a = [1, 2];
// const b = [3, 4];
// const combined = [...a,...b];
// console.log(combined);

// const user = { name: "Ujwal" };
// const newUser = { ...user, age: 19 };
// console.log(newUser);

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 2);
// }
// console.log(sum(1, 2, 3, 4));

// let numbers = [2, 3, 4];
// let product = numbers.reduce((acc, curr) => acc * curr, 5);
// console.log(product); // 24

// let user = {
//   greet: function() {
//     console.log("Hello");
//   }
// };

// let name = "Ujwal";
// let age = 19;
// let user = {
//   name,
//   age,
//   greet() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// };
// user.greet();

