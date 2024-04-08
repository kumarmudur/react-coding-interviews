// reverse the string

function reverseStr(str) {
    let revStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    console.log(revStr);
}

function reverseStr1(str) {
    let rev = str.split('').reverse().join('');
    console.log(rev);
}

reverseStr1('Interview, Happy');