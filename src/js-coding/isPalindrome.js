// isPalindrome string

function isPalindrome(str) {
    let revStr = str.split('').reverse().join('');

    return revStr === str;
}

console.log(isPalindrome('racecar'));