console.log("JSON DAY-1");

//JSON
//Javascript Object Notation
// sebeuah translator supaya bahasa di js bisa dikenali bahasa program lain
//untuk translate obj kita ke dalam database

const obj = {
    name: "Fanny"
}

const objToString = JSON.stringify(obj)
console.log(typeof objToString);

const stringToObj = JSON.parse(objToString)
console.log(typeof stringToObj);

// Kriteria
//key  dibungkus oleh JSON
//tidak dapat membuat komentar
//value bebas

//membuat file json dapoat dengan membuat file dg nama /json
//akhir json tak ada komen


//Authorization
// user dapat mengakses app secara penuh
//flow/cara untuk mendapatkan akses app --> biasanya regist + login
//flow keseluruhan

//authenticatiooon
//proses dimaana suatu user diberikan akses
//pas dikasih akses atua ga
//contoh : regis cuman ngiis nama ngga lengkap, belum tentu diberikan akses. -> nah iotu disebut authentication

//authenticated
//user yang sudah ter autentication

//fetch dan cara penggunaan
//HTTP request untuk menghubungkan suatu app ke API
//HTTP request -> (fetch dan axios dan XMLHTTPREQUEST)

const getListMovie = async() => {
    const body = {

    }

    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
        method: "GET",
        // body: JSON.stringify(body),
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmM2MmRiNjNkNTFiNDFmNzdiMmEwYTFkNWFlNGIyYyIsInN1YiI6IjYwOTI0MzM3NTQ1MDhkMDA2ZjFlMmU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y-dWnWlInitMZLgz92o1TKqqXbnUEuYj2K3oAx9kcDg'
        },
    })

    console.log(await res.json());
    
}

getListMovie()