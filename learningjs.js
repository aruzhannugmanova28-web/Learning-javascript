console.log("I am printing");
let x = Math.floor(Math.random() * 100);
console.log(x)
let text;
if (x % 7 == 0 && x % 9==0) {
    text = "success";
    } else {
    text = "failure";
    }
console.log(text)

const temp = Math.floor(Math.random() * 100);
let temptemp;
temptemp = (temp >= 90) ? "too hot" : 
           (temp <= 60) ? "too cold" : 
           "perfect";
console.log(temp)
console.log(temptemp)
