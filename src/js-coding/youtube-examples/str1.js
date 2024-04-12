let str = 'I love javascript';

let newStr = str.split(' ').map((word) => {
   return word.split('').reverse().join('');
});

console.log(str);
console.log(newStr.join(' '));

