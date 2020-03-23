console.log('|');
console.log('| EXECUTION FROM TASK NUMBER 21');
console.log('|');

/* 
Чтобы брались только двузначные числа
используются спец. символы \b
*/
console.log('12 34 56 78'.replace(/(\d)(\d)/g, '$2$1'));
