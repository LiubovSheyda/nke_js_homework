console.log('|');
console.log('| EXECUTION FROM TASK NUMBER 22');
console.log('|');

console.log(
    'sss site.ru zzz site.com kkk'
        .replace(
            /(\w+\.ru|\w+\.com)/g,
            '<a href="https://$1">$1</a>'
        )
);
