console.log('|');
console.log('| EXECUTION FROM TASK NUMBER 26');
console.log('|');

/*
Внимательно прочитай условие задачи
Вывод в консоль в формате 'aaa [4] bbb [6] ccc [24] ddd'
return "[" + (result * 2) + "]";
*/
console.log(
    'aaa [2] bbb [3] ccc [12] ddd'
        .replace(/[(\d+)]/g, result => {
            return result * 2;
        })
);
