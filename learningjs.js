//1
console.log("--------#1---------");
let x = Math.floor(Math.random() * 100);
console.log(x)
let text;
if (x % 7 == 0 && x % 9==0) {
    text = "success";
    } else {
    text = "failure";
    }
console.log(text)

// 2
console.log("--------#2---------");
const temp = Math.floor(Math.random() * 100);
let temptemp;
temptemp = (temp >= 90) ? "too hot" : 
           (temp <= 60) ? "too cold" : 
           "perfect";
console.log(temp)
console.log(temptemp)

// 3
console.log("--------#3---------");
function volume_of_sphere(radius){
   return (4/3)  * (3.14) * (radius) * (radius) * (radius);
}
let valuevalue = volume_of_sphere(2);
console.log(valuevalue)

// 4
console.log("--------#4---------");
let y = Math.floor(Math.random() * 90);
let value = volume_of_sphere(y);
console.log(value)

//5 
console.log("--------#5---------");
const colors = ["red", "orange", "yellow", "blue", "green", "purple", "pink", "black", "white", "cyan", "grey", "navy blue", "beige", "ultramarine", "brown"];
let size = colors.length  
console.log(size)

let first_element = colors[0];
console.log(first_element)

let last_element = colors[colors.length - 1];
console.log(last_element)

const randomIndex=Math.floor(Math.random()* colors.length);
const randomElement=colors[randomIndex];
console.log(randomElement)

let sort = colors.sort()
console.log(sort)

colors.push("bright purple");
console.log(colors)

colors.push(6767);
console.log(colors)


//6
console.log("--------#6---------");

function randomElementsarray(min , max, count){
    const randomElements_=[];
for (let i =0; i<count; i++) {
    let randomElements=Math.floor(Math.random()* (max-min+1)) + min;
    randomElements_.push(randomElements);
}
return randomElements_;
}
const Elementsarray = randomElementsarray(29, 87, 10);
console.log(Elementsarray)





