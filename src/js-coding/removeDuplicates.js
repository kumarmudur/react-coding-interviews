// remove duplicates in the array

function removeDuplicates(arr) {
    let set = [ ...new Set(arr)];
    console.log(set);
}

function removeDuplicates1(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6, 6]);