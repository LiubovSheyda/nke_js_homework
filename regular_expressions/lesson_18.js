const secondTask = (value) => /^https?:\/\//.test(value);
const fourthTask = (value) => /(txt|html|php)$/.test(value);
const sixthTask = (value) => /[1-9]|1[0-2]/.test(value);
const eighthTask = (value) => /^([0-2][0-9]|(3)[0-1])(.)(((0)[0-9])|((1)[0-2]))(.)\d{4}$/.test(value);

// explanation here: https://stackoverflow.com/a/201378
const tenthTask = (value) => /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);


console.log(secondTask("http://"));
console.log(secondTask("https://"));

console.log(fourthTask("wow.txt"));
console.log(fourthTask("wow.html"));
console.log(fourthTask("wow.php"));

console.log(sixthTask(1));

console.log(eighthTask("19.03.2020"));

console.log(tenthTask("hello@whywelive.me"));

