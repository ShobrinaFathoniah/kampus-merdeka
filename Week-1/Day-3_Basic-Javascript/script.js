console.log("Day 3");

//Variabel
//var
var student = "aku adalah student";
var student = "namanya";
document.querySelector('body').innerHTML = student;

//let
let aku = "aku";
//let aku = "kamu"; error karena suda ada

//const
const phi = 3.14;
//phi = 2; uncaught TypeError: Assignment to constant variable.
console.log(phi);

//type data
//number
//float
const kopi = 6.5;
console.log(typeof(kopi));
//int
const mobil = 2;

//string
const nama = "Shobrina Fathoniah";
const namaku = 'Fanny';

console.log("jum'at");

//boolean
const isWisuda = true;
const isOld = false;

//object
const fanny = {
    nama: "Fanny",
    semester: 8,
    univ: "UNSIKA"
}
console.log(fanny.semester);

//array
const number = [1, 2, 3, 4, "5", {nama: "Fanny", smt: 8}];
console.log(number[0]);

//function
//NaN
//bukan nomor ditambah dengan yang bukan nomor

//null
//null = kosong (tidak ada apapun)
let apa = null; 

//undefined
//ada value namun belum didefinisikan
let ya = undefined;

//operator
//number
const a = 7;
const b = 8;
const jumlah = a+b;
const pengurangan = a-b;
const perkalian = a*b;
const pembagian = a/b;
const pangkat = a**b;
const modulus = a%b;
let angka = 2;
angka = angka+5;
angka +=2; //disingkat dapat digunakna pada berbagai operasi number
console.log(angka);

//string
const firstName = "Shobrina";
const lastName = "Fathoniah";
console.log(firstName + lastName); //ShobrinaFathoniah
console.log(firstName - lastName); //NaN
console.log(firstName + 20);

//comparison
// >
const isGreaterThan = 5 > 6;
console.log(isGreaterThan);

// <
const isFalseThan = 5 < 6;
console.log(isFalseThan);

//>=
const isGreaterThanOrEqual = 5 >= 6;
console.log(isGreaterThanOrEqual);

//<=
const isLessThanOrEqual = 5 <= 6;
console.log(isLessThanOrEqual);

// == -> membandingkan nilai yangsama tanpa memikirkan tipe data
const isEqualTo = "15" == 15;

// === -> memikirkan tipe data
const isEqualTo2 = "15" === 15; // sangat disarankan

//!= tidak sama dengan
const isNotEqual = "15" != 15; // false

//!== tidak sama dengan, nge cek tipe data
const isNotEqual1 = "15" !== 15; // true

// tipe data falsy -> selalu false --> null
//tipe data truthy -> selalu true

const isTrue = (20>80) === true; //false tidak sala dengan true -> false