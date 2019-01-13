function cariMean(arr) {
    // you can only write your code here!
    var meanNum = 0
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    meanNum = sum / arr.length
    return Number(meanNum.toFixed(0))
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7