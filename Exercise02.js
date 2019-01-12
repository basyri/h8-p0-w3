function balikString(param) {
    var s = ''
    for (var i = param.length - 1; i >= 0; i--) {
        s += param[i]
    }
    return s
}

console.log(balikString('hello world'))