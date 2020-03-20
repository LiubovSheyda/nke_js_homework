console.log('|');
console.log('| EXECUTION FROM TASK NUMBER 19');
console.log('|');

console.log(
    'a1b c34d x567z'.match(/\d/g, '!')
        .reduce(
            (current, value) => current += parseInt(value, 10),
            0
        )
);
