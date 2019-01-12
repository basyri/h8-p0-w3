function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var n = arr.length
    //READ AND COMPARE arr FROM LEFT to RIGHT, RIGHT to LEFT 
    for (var i = 0; i < n; i++) {
        if (arr[i + 1] % arr[i] === arr[n - 1 - i] % arr[n - 2 - i]) {
            return true
        } else {
            return false
        }
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false