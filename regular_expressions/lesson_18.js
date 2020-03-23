console.log('|');
console.log('| EXECUTION FROM TASK NUMBER 18');
console.log('|');
/*
где проверка http:// 
*/
const secondTask = (value) => /^https?:\/\//.test(value);

/*
Внимательно прочитай условие задачи №4
Определите, что ли заканчивается переданная строка расширением jpg или jpeg.
*/
const fourthTask = (value) => /(txt|html|php)$/.test(value);

/*
Внимательно прочитай условие задачи №6
Определите, является ли строка числом, длиной от 1 до 12 цифр.
*/
const sixthTask = (value) => /[1-9]|1[0-2]/.test(value);

const eighthTask = (value) => /^([0-2][0-9]|(3)[0-1])(.)(((0)[0-9])|((1)[0-2]))(.)\d{4}$/.test(value);

// explanation here: https://stackoverflow.com/a/201378
const tenthTask = (value) => /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);


console.log('Second task:', secondTask("http://"));
console.log('Second task:', secondTask("https://"));

console.log('Fourth task:', fourthTask("wow.txt"));
console.log('Fourth task:', fourthTask("wow.html"));
console.log('Fourth task:', fourthTask("wow.php"));

console.log('Sixth task:', sixthTask(1));

console.log('Eighth task:', eighthTask("19.03.2020"));

console.log('Tenth task:', tenthTask("hello@whywelive.me"));

