/*
//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

    =>Buatlah sebuah function dengan nama dataHandling2 yang akan 
      menerima input array seperti di atas.

    =>Gunakan fungsi splice untuk memodifikasi variabel tersebut 
    agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", 
"Pria", "SMA Internasional Metro"] 
*/

function dataHandling2() {
    var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
    arr.splice(1, 2, 'Elsharawy Roman Alamsyah', 'Provinsi Bandar Lampung')
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(arr)
    var ambil = arr[3].split(' ', 3)
    var tgl = String(ambil)
    //var hasil = tgl.split(" ")
    var tanggal = tgl.slice(0, 2)
    var bulan = tgl.slice(4, 5)
    var tahun = tgl.slice(6, 10)




    switch (Number(bulan)) {
        case 1:
            console.log('Januari');
            break;
        case 2:
            console.log('Februari');
            break;
        case 3:
            console.log('Maret');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('Mei');
            break;
        case 6:
            console.log('Juni');
            break;
        case 7:
            console.log('Juli');
            break;
        case 8:
            console.log('Agustus');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('Oktober');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('Desember');
            break;

        default:
            console.log('Bulan tidak dimasukkan');
            break;
    }
    bulan = tgl.slice(3, 5)
    var hSplit = tanggal + ' ' + bulan + ' ' + tahun
    var realSplit = hSplit.split(' ')
    var hJoin = realSplit.join('-')
    var sorting = realSplit.sort(function (value1, value2) {
        return value1 < value2
    })
    console.log(sorting)
    console.log(hJoin)

    var ambilElement = arr[1]
    var jadiString = String(ambilElement).slice(10, 23)

    console.log(jadiString)

}

dataHandling2()