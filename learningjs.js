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

let distance_1=0;
let el1=0;
let el2=0;

for (let i=0;i<Elementsarray.length - 1;i++){
    const a = Elementsarray[i];
    const b = Elementsarray[i+1];
    const distance_2 =Math.abs(a-b);

    if (distance_2>distance_1){
        distance_1=distance_2;
        el1=a;
        el2=b;
    }
}
console.log(Elementsarray)
console.log(distance_1)
console.log(el1, el2)

//7
console.log("--------#7---------");
const newElementsarray=Elementsarray.map(Math.sqrt) //square root
const newnewElementsarray=Elementsarray.map(number => number * number) //squared

console.log(newElementsarray)
console.log(newnewElementsarray)

//8
console.log("--------#8---------");
const new_max_number_array = newnewElementsarray
const max_number = Math.max(...new_max_number_array);
console.log(max_number);
const result = new_max_number_array.filter(checknumbers);
function checknumbers(object) {
  return object >= max_number / 2;
}
console.log(result)

//9
console.log("--------#9---------");
const array_9 = result.reduce(getSum, 0);
function getSum(total, num) {
    return total + Math.round(num);
}
console.log(array_9)

//10
console.log("--------#10---------");
const array_10 = result;
array_10.forEach((numbernumber, index) => {
  console.log(`${index + 1}. ${numbernumber}`);
});

//11
console.log("--------#11---------");
class Car {
constructor(brand, car_number, car_country) {
    this.carname = brand;
    this.carnumber = car_number;
    this.carcountrycode = car_country;
  }
  printDetails() {
    console.log(`Car brand: ${this.carname}`);
    console.log(`Car number: ${this.carnumber}`);
    console.log(`Car country: ${this.carcountrycode}`);
  }
}
const myCar = new Car("Ford", 785, "US");
myCar.printDetails();


//12
console.log("--------#12---------");
console.log("--------#12 array ---------");

const cararray =[
  new Car("Ferrari", 751, "KZ"),
  new Car("Toyota", 732, "CA"),
  new Car("Honda", 793, "AU"),
  new Car("Nissan", 794, "NZ"),
  new Car("Kia", 635, "EU"),
  new Car("Chevrolet", 736, "SW"),
  new Car("Jeep", 937, "NK"),
  new Car("Volkswagen", 738, "SK"),
  new Car("Audi", 739, "UK"),
  new Car("BMW", 780, "RU"),
];

cararray.forEach(car => car.printDetails());

console.log("--------#12 strings---------");
const car_strings = cararray.filter(car => car.carcountrycode === "KZ");
car_strings.forEach(car => car.printDetails());

console.log("--------#12 numbers---------");
const carNumbers = cararray.map(car => car.carnumber);
console.log(carNumbers);

console.log("--------#12 change values---------");
cararray.forEach(car =>{
  if (car.carcountrycode === "RU") {
    car.carname = `Tesla`;
  }
});
cararray.forEach(car => car.printDetails());

console.log("--------#12  sort---------");
let sort_cars = cararray.sort(function(a, b){return a.carnumber - b.carnumber});
sort_cars.forEach(car => car.printDetails());







