console.log('|');
console.log('| EXECUTION FROM TASK NUMBER 26');
console.log('|');

console.log(
    'aaa [2] bbb [3] ccc [12] ddd'
        .replace(/[(\d+)]/g, result => {
            return result * 2;
        })
);
