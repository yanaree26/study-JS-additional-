let arr = ['123', '234', '25677', '67856', '42465', '2342', '824'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].split('')[0] == 2 || arr[i].split('')[0] == 4) {
        console.log(arr[i]);
    }
}

for (let num = 0; num <= 100; num++) {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if(num % i == 0) {
            flag = false;
        }
    }
    if(flag) {
        console.log(num);
    }
}