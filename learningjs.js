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
let y = Math.floor(Math.random() * 5);
let value = volume_of_sphere(y);
console.log(value)

//5 
console.log("--------#5---------");
const colors = ["red", "orange", "yellow", "blue", "green", "purple", "pink", "black", "white", "cyan", "grey", "navy blue", "beige", "ultramarine", "brown"];
let size = colors.length    
let first_element = colors[0];
let last_element = colors[colors.length - 1];
let random_element = random.colors[]
let sort = colors.sort()

console.log(size)
console.log(first_element)
console.log(last_element)
console.log(random_element)
console.log(sort)
colors.push("light green");


//6
console.log("--------#6---------");


