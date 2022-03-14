console.log("OOP");
// OOP
//pemrograman berorientasi objek
// ada kelas dan objek yang memiliki sifatnya tersendiri
//menyelesaikan suatu masalah atau algoritma menggunakan metode objek

//Paradigma pemrograman
//cara kita menyelesaikan suatu masalah atau algoritmaa menggunakan sudut pandang pemrograman
//cara menuliskan baris code sesuai cara pandang orang-orangnya sendiri2
// -procedural programming, -functional programming, -array programming, -oop.

//kenapa pakai OOP
// biar lebih rapih
// centralized
// menyederhanakan masalah yang kompleks menjadi lebih kecil
//reuseable -> adanya sistem inheritance (penurunan sifat)
//memudahkan menganalisa program yang kita buat

//Konsep OOP
const buah = {
    name: "Pisang",
    color: "Kuning",
    bentuk: "Lonjong"
}

console.log(`Buah ini adalah ${buah.name} berwarna ${buah.color} dan bentuknya adalah ${buah.bentuk}`);

//versi baik
const Buah = (name, color, bentuk) => {
    return {
        name: name,
        color: color,
        bentuk: bentuk
    }
}

const Alpukat = Buah("Alpukat", "Hijau", "Oval")
console.log(`Buah ini adalah ${Alpukat.name} berwarna ${Alpukat.color} dan bentuknya adalah ${Alpukat.bentuk}`);

//lebih singkat (class)
const BuahLama = function (name, color, bentuk) {
    this.name = name
    this.color = color
    this.bentuk = bentuk
}

const mangga = new BuahLama("Mangga", "Hijau", "Bulat");
console.log(`Buah ini adalah ${mangga.name} berwarna ${mangga.color} dan bentuknya adalah ${mangga.bentuk}`);

//setelah terbaru diupdate
class BuahBaru {
    //cara satu bikin propert
    constructor(name, color, bentuk) {
        this.name = name //properti (yang sudah diisi value bukan function) kalau diisi dengan function disebut sebagai method
        this.color = color
        this.bentuk = bentuk
    } //untuk menangkap value2 

    //cara dua bikin properti
    habit = "tempat yang enak"

    caraMakan() {
        //ini adalah method, cara pake samakyak function
        return "Kupas Kulit Gaizzz"
    }
}

const rambutan = new BuahBaru("Rambutan", "Merah", "Bulat")
console.log(`Buah ini adalah ${rambutan.name} berwarna ${rambutan.color} dan bentuknya adalah ${rambutan.bentuk}, dan cara makannya adalah dengan ${rambutan.caraMakan()} dan habitnya adalah ${rambutan.habit}`);

//class baru
class Hero {
    constructor(heroName, stamina, type) {
        this.heroName = heroName
        this.stamina = stamina
        this.type = type
    }

    attack = 10
    health = 100
    #level = 50 //properti private

    menyerang() {
        this.stamina -= 2
        return this.stamina
    }
}

//undefine -> ke default
const Nana = new Hero("Nana", "100", "Mage")
console.log(`Hero ini bernama ${Nana.heroName} bertype ${Nana.type} dengan attack ${Nana.attack} stamina ${Nana.menyerang()}`);
console.log(`Hero ini bernama ${Nana.heroName} bertype ${Nana.type} dengan attack ${Nana.attack} stamina ${Nana.menyerang()}`);

//Inheritance
//menurunkan semua properti + method 
//extends
class Attribute extends Hero {
    //haurs manggil parameterdi class parent
    constructor(heroName, stamina, type) {
        //super("Miya", 300, "lupa namanya") //new attribut -> newHero
        super(heroName, stamina, type)
    }

    showLevel() {
        return this.level = 0
    }

    //polymorphysm -> kyk nimpa aja methood sebelumny
    menyerang() {
        if (this.type === "Mage") {
            return this.stamina -= 1
        } else {
            return this.stamina - + 4
        }
    }
}

const Miya = new Attribute("Miya", 300, "Penyerang")
console.log(Miya.menyerang());

//encapsulation
//properti yg tidak ddapat doiogunakan sembarang class
//menentukan soifat proivate/public
//default->public
//properti pirvate pake #


//polymorphysm
//method sama fungsi berubah tanpa mengubah sungsi parent secara langsung


//abstraction
// membuat properti se dinamis mungkin
//membuat urutan dalam poroprty tidak menjadi masalah
//setiap class bisa bebas apa aja properti nya
class Student {
    constructor(props, nilai) {
        this.state = {
            ...props //abstraction -> isinya harus pake objek
        },
        this.nilai = nilai
    }
}

const Fanny = new Student({
    nama: "Fanny",
    semester: 8,
    hobi: ["main game", "nonton", "tidur"]
}, [90, 100, 89])

console.log(Fanny.nilai);

const Shobrina = new Student({
    kesukaan: ["Makan", "Tidur"],
    address: "perum bkkbn"
}, [100, 90, 89])

console.log(`hall ini adalah Shobrina dengan kesukaan ${Shobrina.state.kesukaan} dengan almaat ${Shobrina.state.address}`);


//membuat
//1. kelas kendaraan -> menjelaskan kriteria mobil -> kecepatan mobil
// console.log("");
// console.log("Kendaraan");
// class kendaraan {
//     constructor(tipe, warna, maxPenumpang) {
//         this.tipe = tipe
//         this.warna = warna
//         this.maxPenumpang = maxPenumpang
//     }

//     kecepatan(jarak, waktu) {
//         return jarak / waktu
//     }
// }

// const Mobil = new kendaraan("Inova", "Ungu", 4)
// console.log(`Ini adalah kendaraan dengan tipe ${Mobil.tipe} memiliki warna ${Mobil.warna} dengan jumlah penumpang maksimal adalah ${Mobil.maxPenumpang}. Kendaraan ini memiliki kecepatan yaitu ${Mobil.kecepatan(60, 90)} m/s`);

console.log("");
console.log("Kendaraan abstrak");
//abstraction
class Kendaraan {
    constructor(props) {
        this.state = {
            ...props
        }
    }

    kecepatan(jarak, waktu) {
        return jarak / waktu
    }
}
const Motor = new Kendaraan({
    nama: "Motor",
    roda: 2,
    warna: "Hitam"
})

const kecepatanMotor = Motor.kecepatan(100, 80)

console.log(`Ini adalah ${Motor.state.nama} dengan warna ${Motor.state.warna} dan memiliki jumlah roda yaitu ${Motor.state.roda} serta memiliki kecepatan yaitu ${kecepatanMotor} m/s`);

console.log("");
const Pesawat = new Kendaraan({
    nama: "Pesawat",
    warna: "Hitam",
    tipe: "Airbus A320",
    penerbangan: "Jakarta - London"
})

const kecepatanPesawat = Pesawat.kecepatan(1000000, 7890)

console.log(`Ini adalah ${Pesawat.state.nama} dan tipe ${Pesawat.state.tipe} dengan warna ${Pesawat.state.warna} dan memiliki jumlah roda yaitu ${Pesawat.state.penerbangan} serta memiliki kecepatan yaitu ${kecepatanPesawat} m/s`);

//2. kelas hewan -> punya nama, kriteria, dancara hidup dan kebiasaan
