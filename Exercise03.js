/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. 
Contoh input dapat dilihat dibawah:

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 

Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data 
pada dari argumen seperti di bawah ini:

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun

*/

function dataHandling(n) {

    var label = [

        ["Nomor ID: "],
        ["Nama Lengkap: "],
        ["TTL: "],
        ["Hobi: "]
    ]


    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < n.length; j++) {
            console.log(label[j] + n[i][j])
        }
        console.log('\n')
    }

}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung 21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan 10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon 25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura 6/4/1970", "Berkebun"]
]

dataHandling(input)