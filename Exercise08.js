function pasanganTerbesar(num) {
    // you can only write your code here!
    var greaterNum = 0
    var splited = String(num).split('')
    for (var i = 0; i < splited.length; i++) {
        if (greaterNum < splited[i])
            greaterNum = splited[i] + splited[i + 1]
    }
    return greaterNum
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99