let p = document.querySelector('p');
let week = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();

for(let i = 0; i < week.length; i++) {
    let day = `<p id="${week[i]}">${week[i]}</p>`

    p.insertAdjacentHTML('afterEnd', day);

    if (i == 5 || i == 6) {
        document.querySelector(`#${week[i]}`).style.fontStyle = 'italic';
    }

    if (i == date.getDay()) {
        document.querySelector(`#${week[i]}`).style.fontWeight = 'bold';
    }  

    p = document.querySelector(`#${week[i]}`);
}
