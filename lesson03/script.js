//1st task
let lang = prompt('Language:');

let days_en = 'Monday, Tuesday, Wensday, Thursday, Friday';
let days_ru = 'Понедельник, вторник, среда, четверг, пятница';

if (lang == 'ru') {
    console.log(days_ru);
} else if(lang == 'en') {
    console.log(days_en);
}

switch (lang) {
    case 'ru':
        console.log(days_ru);
        break;
    case 'en':
        console.log(days_en);
        break;
}

let days_arr = [];
days_arr['en'] = ['Monday, Tuesday, Wensday, Thursday, Friday'];
days_arr['ru'] = ['Понедельник, вторник, среда, четверг, пятница'];

console.log(days_arr[lang]);
