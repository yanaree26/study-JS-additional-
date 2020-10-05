let num = 266219;
let mult = 1;

while (num > 1) {
    mult *= num % 10;
    num = Math.floor(num/10);
}

mult **= 3;

console.log(String(mult).slice(0,2));
