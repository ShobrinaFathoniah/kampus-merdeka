//how abstraction work -> tipe data tergantung inputan

//khusus tipedata obyek
//seolah2 harus ngasih key yg sesuai
const Student = ({nama, age}) => {
    console.log(nama);
}

Student({nama: "Fanny", age: 20});
<Student nama="Fanny" age={20} />;