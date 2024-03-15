// find the largest element in the array

function findLargestNumber(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) largestNum = arr[i];
    }
    console.log(largestNum);
}

findLargestNumber([2, 4, 6, 9, 3]);