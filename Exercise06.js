function angkaPalindrome(num) {
    while (num > 0) {
        if (num == 8 || num.toString() !== [...num.toString()].reverse().join('')) {
            num++
        } else {
            return num
        }
    }
}

// TEST CASES

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001