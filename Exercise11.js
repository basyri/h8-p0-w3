/*
Problem

Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu 
parameter berupa array yang terdiri dari angka. Function tersebut akan 
mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. 
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka 
yang tidak konsisten.
*/

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var n = arr.length
    //READ AND COMPARE arr FROM LEFT to RIGHT, RIGHT to LEFT 
    for (var i = 0; i < n; i++) {
        if (arr[i + 1] - arr[i] === arr[n - 1 - i] - arr[n - 2 - i]) {
            return true
        } else {
            return false
        }
    }

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false