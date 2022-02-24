console.log("Week-2 day 2");

//Built in function (method bawaan function)
//semua tipe data ada built in function
//string
//masukin dulu ke variable baru di log
//built in function biasanya dapat digunakan string maka bisa di array
//satu value
const myName = "Shobrina Fathoniah"
console.log(myName.length);
console.log(myName[1]);
// slice
console.log(myName.slice(3, 6));

//concat -> penggabungan kata, jumlahnya bisa banyak
console.log(myName.concat(" adalah"));

//string literal
//pakai backtick 
//bisa manggil variabel dg ${nama variabel}
const firstName = "Shobrina"
const lastName = "Fathoniah"
console.log();

//split
//hasil berupa array
const hasilSplit = myName.split(" ")
console.log(hasilSplit);

//toUpperCase
const hasilUpperCase = myName.toUpperCase()
console.log(hasilUpperCase);

//toLowerCase
const hasilLowerCase = myName.toLowerCase()
console.log(hasilLowerCase);

//includes
//mengembalikan true/false bisa bebas
const isExits = myName.includes("fani")
console.log(isExits);

//w3shoock->reference -> js


//array
// bnayak value
//isi metod bisa dicek dg pk prototype
const students = ["Nadia", "Fanny", "Nia"]
//splice
const hasilSplice = students.splice(0, 4)
console.log(hasilSplice);

//slice
const hasilSlice = students.slice(0, 1)
console.log(hasilSlice);

//concat
const hasilConcatArr = students.concat("Aka")
console.log(hasilConcatArr);

//reverse
const hasilReverse = students.reverse()
console.log(hasilReverse);

//join
// ngubah array jadi string
//default dipisah dg koma
const hasilJoin = students.join(", ")
console.log(hasilJoin);

let number = [2, 4, 5]
//map
//perulangan, dapat mengembalikan array
number.map((value, index) => {
    return number[index] = value * 3
}) //anonimus function, dikasih 2 param secara default
console.log(number);
//foreach
//perulangan untuk array
//tidak mereturn value, ga perlu assign ke varaibel
//harus menerima satua paramater, berupa function
number.forEach((value, index) => {
    number[index] = value * 3
}) //anonimus function, dikasih 2 param secara default
console.log(number);

//includes
//aga string(?), harus nilai valuenya
const hasilIncludesArr = students.includes("fan")
console.log(hasilIncludesArr);

//indexOf
//nyari data itu ada di index keberapa
const indexKe =number.indexOf(4)
console.log(indexKe);

//find
//mencari
//hanya mengembalikan satu nilai, mengecek dg nilai yg paling deket
const hasilFind = number.find((value, index) => {
    return value < 2
})
console.log(hasilFind);

//filter
//memunculkan semua data hasil pencarian dg array
//diurutkan dr yang mendekati yang masuk pertama

const hasilFilter = number.filter((value, index) => {
    return value === 18
})
console.log(hasilFilter);


//sort
//pengurutan
const hasilSort = number.sort((a, b) => {
    return a - b //pengecekan apakah a kurang dr b dan diulang
})
console.log(hasilSort);

//number
const age = "20"
//parseInt
//klaua uda ketemu number walau diakhir ada ga dianggap
//klaau stirng di awal akan langsung error
console.log(typeof(parseInt(age)));

//parseFloat
console.log(typeof(parseFloat(age)));

//math round
//dibulatkan keatas lebih dr5 sama dg 5
//kebawah kurang dr 5 kebawah
const round = Math.round(2.5)
console.log(round);

//cell
//dibulatkan ke atas semua
const ceil = Math.ceil(5.3)
console.log(ceil);

//floor
//dibulat kan kebawah
const floor = Math.ceil(5.999)
console.log(floor);

//random
//nilai random
//ga lebih dr 1 dan ga kurang dari 0
//kalau bulat di kali 10 + parse int
const random = Math.random()
console.log(random);

//object
// pass oop

//boolean -> negasi
console.log(!true);


//buatlah satu function yang merubah 
// huruf awal dr param
//dari suatu kata menjadi kapital
//rules -> oparam tidak boleh ga string, selain itu alert
//setiap kata harus berawalan kapital

//split -> ambil huruf awal setiap datanya -> join
const kapital = (kalimat) => {
    const split = kalimat.split(" ")
    const kataAwal = split.map((value, index) => {
        if (split[index][0]) {
            return value[0].toUpperCase()
        } else {
            return value[index][index]
        }
    })

    const gabungan = kataAwal.join(" ")

    return gabungan
}

console.log(kapital("halo ini hari minggu"));