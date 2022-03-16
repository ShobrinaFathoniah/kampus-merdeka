console.log("Day 2 - Promise");
//Promise 
//single trip -> langsug jalanin aja semuanya 1 jalan
//js berjalan scr async
let sudahDatang;
let kondisi = "laper"

const doTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("atas")//pas uda seloesai pendingnya baru keluar
        //sudahDatang = true
    }, 5000) //1000 -> 1 detik
})

const doTask1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (kondisi === "laper") {
            resolve("Ayo makangaiz")//pas uda seloesai pendingnya baru keluar
        } else {
            reject("Yaudah mainan")
        }

        //sudahDatang = true
    }, 3000) //1000 -> 1 detik
})

const doTask2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("ini error")//pas uda seloesai pendingnya baru keluar
        //sudahDatang = true
    }, 1000) //1000 -> 1 detik
})

//callback statement
//ga bisa hendling error selain dr reject
//-> then
sudahDatang = doTask.then((res) => {
    sudahDatang = res // res adalah hasil dari resolve
    console.log(sudahDatang); //log keluaran di dalem then
})

// sudahDatang = doTask1.then((res) => {
//     sudahDatang = res // res adalah hasil dari resolve
//     console.log(sudahDatang); //log keluaran di dalem then
// })

// console.log("aku tanpa promise");

// //-> catch (menghandle erorr)
sudahDatang = doTask2
    .then((res) => {
        sudahDatang = res // res adalah hasil dari resolve
        console.log(sudahDatang); //log keluaran di dalem then
    })
    .catch((err) => {
        console.log(err);
    })

//asyncronous process
const doTask3 = async () => {
    //keotlka di try ada error langsung ke catch
    try {
        //nyelesaiin yng await dulu, urutan berpengaruh
        const result = await doTask1
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

doTask3()

//satu poroject reactnative di day 2 nama => movie, reactnative init -> muncul introo

// -> janji
// -> terjadi 3 hal:
//1. pending


//2. fulfilled / resolved


//3. rejected


//untuk menghandle pending pada suatu promise

