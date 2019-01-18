/*
Problem

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter... 
berupa array yang berisi string. Function akan me-return array multidimensi
dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan...
sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). 
Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
    // you can only write your code here!
    var zoo = [];
    var index = 0

    // animals.sort()

    // console.log(animals[0] < animals[1])

    for (var i = 0; i < animals.length; i++) {
        for (var j = i + 1; j < animals.length; j++) {
            if (animals[i] > animals[j]) {
                var temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
        }

        if (zoo.length === 0) {
            zoo.push([animals[i]]);
        } else if (zoo[index][0][0] === animals[i][0]) {
            zoo[index].push(animals[i])
        } else {
            zoo.push([animals[i]])
            index++
        }
    }
    return zoo
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]