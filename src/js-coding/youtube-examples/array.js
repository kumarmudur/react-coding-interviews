const checkIsArray = (elem) => {
    return Array.isArray(elem);
}

console.log(checkIsArray([]));
console.log(checkIsArray({}));
console.log(checkIsArray([1, 2, 3]));

function duplicateArray(arr) {
    return arr.concat(arr);
}

duplicateArray([1, 2, 3]);