console.log("Week-2 Day-1");

//buatlah suatu function dimana function menerima 1 parameter, 
//function ini bertujuan untuk menentukan nilai parameter ganjil/genap

function genapGanjil(angka) {
    if(angka % 2 === 0){
        return "Genap"
    }else{
        return "Gajil"
    }
}

function ganjilGenap(angka) {
    return angka % 2 === 0 ? 'Genap' : 'Ganjil'; //not recommended jika statement hanya satu
}

console.log(genapGanjil(12)); 

//Arrow Function
//tidak mengenal konsep this
const calingName = (nama) => {
    return "hallo " + nama
}

const calingName1 = nama =>  "hallo " + nama

//function dg 2 parammeter parameter 1 digunkana untuk menentukan kelipatan berapa, parameter kedua batas akhir
//return array kelipatannya
const multiply = (angka1, angka2) =>{
    let hasil = []
    for (let i = angka1; i <= angka2; i = i + angka1){
        hasil.push(i)
    }
    return hasil
}

console.log(multiply(2, 10));

//array
const students = ["Nurfauziah", "Iqbal", "Akbar", "Shobrina", ["Irfan", "Akdeas", "Diah"]]
const guys = ["audy", "rahmat", "rafi"]

// CRUD
//read
console.log(students[0]);
console.log(students[4][1]);

//create
//unshift (buid in function)
guys.unshift("Rizky")

//push
guys.push("Mia")

//langsung tulis indexnya
guys[5] = "kania"
guys[3] = "Nia" //kalau di index yg uda ada bakalan neggantiin ynang sebelumnya.

console.log(guys);

//update
guys[1] = "Audy Wisuda Pratama"
console.log(guys);

//delete
//shift (Depan)
guys.shift()

//pop (belakang)
guys.pop()
console.log(guys);

//object
const biodata = {
    firstName: 'Shobrina',
    middleName: null,
    lastName: 'Fathoniah',
    age: 21,
    isMarried: false,
    hobbies: ["tidur", "main game"],
    myFullname: function () {
        return this.firstName + this.lastName
    }
}
// CRUD
//read
//pake dot
console.log(biodata.firstName);
console.log(biodata.hobbies[1]);

//pake square
console.log(biodata["firstName"]);
console.log(biodata["hobbies"][1]);

//create
biodata.address = "jalan"

//update
//pk key yng uda ada
biodata.address = "jalanan"

//delete
delete biodata.address
console.log(biodata);

//distraction pada array dan object
//CURD tanpa cara di atas

//array
//read dan update
let [name1] = students
name1 = "Nana"
console.log(name1);

//object
//sesuai dengan key nya
let {firstName, hobbies} = biodata
console.log(hobbies[1]);

//spread operaator
//array
// ... -> ambilsemua yang ada di variabe students
const listStudent = [...students, "Rico"]
console.log(listStudent);

//object
//hanya bisa ditaro di belakang
//update -> pk key yang sama
const dataKu = {...biodata, kelas: "RN-1", }
console.log(dataKu);

