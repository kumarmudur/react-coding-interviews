// isAnagrams

function isAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagrams('listen', 'silent1'));