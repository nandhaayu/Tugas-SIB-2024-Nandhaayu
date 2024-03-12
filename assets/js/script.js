 //statement atau kalimat dalam kode
alert("Hello World")

//penggunaan variable var,let,const
var fullname = 'AAN'
fullname = 'Raid'
console.log(fullname)

let kota = 'malang'
kota = 'surabaya'
console.log(kota)

const bulan = 'maret' //variable const bersifat tetap tidak bisa diganti
console.log(bulan)

//var tidak memiliki block scope jadi akan bingung saat pemanggilan data atau undefine
var x = 11;
if (true) {
    var x = 17;
    console.log("Nilai x di dalam blok:", x); //harusnya output 17
}
console.log("Nilai x di luar blok:",x); //harusnya output 11

//let memiliki block scope jadi data output benar
let y=21;
if (true){
    let y = 55;
    console.log("nilai di dalam scope:",y);//output 55
}
console.log("nilai di luar scope:",y);//output 21

//tipe data number
let bulat = 25
let decimal = 25.2
let huruf = 'a'
console.log("bulat =",bulat)
console.log("decimal =",decimal)
console.log("hasil penjumlahan =", decimal + bulat)
console.log(bulat/0)//output infinity
console.log(huruf/5)//output NaN

//tipe data bigint
let angka = 12312341234512341234323565343n
console.log(angka)

//tipe data string
let text = "belajar"
console.log(text)

//tipe data boolean (berisi data kebenaran antara true atau false)
let perbandingan = 15 > 9
console.log(perbandingan)

//tipe data undefined
let and
console.log(and)

//tipe data null
let kosong = null
console.log(kosong)

//tipe data symbol (sesuatu yang bernilai unik dan tidak dapat diubah)
let employe = Symbol('ayu')
console.log(employe)
console.log(employe.description)

//tipe data object
let mahasiswa = {
    nama : "nandha",
    umur : "21",
    job : "web developer",
    menikah : false,
}
//memakai backtic (``) bukan titik dua ('')
console.log(`Nama saya adalah ${mahasiswa.nama} yang berumur ${mahasiswa.umur} tahun`)

//type conversion string
let value = false//boolean
let string = String(value)
alert(typeof value)

//type conversion numeric
let angka1 = "13";
let angka2 = 30;
angka1 = Number(angka1);
console.log("TYPE CONVERSION NUMERIC")
console.log(angka1 + angka2);

//type conversion boolean
//Nilai 0, String yang kosong, null, undefined, and NaN, menjadi false.
alert(Boolean(0))
alert(Boolean(1))

//operator aritmatika
let c = 4
let d = 6
console.log("OPERASI ARITMATIKA")
console.log(c + d)//penjumlahan
console.log(c - d)//pengurangan
console.log(c * d)//perkalian
console.log(c ** d)//pemangkatan
console.log(c / d)//pembagian
console.log(c % d)//sisa bagi atau modulus

//operator comparison (perbandingan)
//perator perbandingan akan menghasilkan salah satu dari nilai true atau false. 
let e = 5
let f = 3
console.log("OPERATOR COMPARSION")
console.log(e == f)//sama dengan
console.log(e < f)//lebih kecil
console.log(e > f)//lebih besar
console.log(e != f)//tidak sama dengan
console.log(e <= f)//lebih kecil sama dengan
console.log(e >= f)//lebih besar sama dengan

//operator logika (operasi terhadap dua nilai boolean.)
let p = -3
let o = 5
console.log("OPERATOR LOGIKA")
// console.log(p && o) (LOGIKA AND)
// console.log(p || o) (LOGIKA OR)
// console.log(!p) (NEGASI/KEBALIKAN)
if(p > 0 && o > 0){
    console.log("p dan o positif");
}else {
    console.log("p dan o negatif");
}
if(p > 0 || o > 0){
    console.log("p dan o positif");
}else {
    console.log("p dan o negatif");
}

//operator bitwise
let k = 3
let l = 5
console.log("OPERATOR BITWISE")
console.log(k & l);//and
console.log(k | l);//or
console.log(k ^ l);//kebalikan
console.log(~k);//negasi

//operator ternary
let q = 6
let r = 4
console.log("OPERATOR TERNARY");
console.log(q == r ? 'sama' : 'tidak sama');//penerapan if else satu baris

//pop up
alert('menampilkan pop up alert')//alert
let prom = prompt("Apakah anda akan belajar malam ini?");//prompt
console.log('jawaban anda : ' + prom);

let con = confirm("Apakah anda akan belajar malam ini?");//confirm
console.log(con ? 'iya' : 'tidak');

//percabangan switch
let sw = "blue"
console.log("PERCABANGAN SWITCH")
switch (sw) {
    case "red":
    console.log('I Love Red')
    break;

    case "blue":
    console.log('I Love Blue!')
    break;

    default:
    console.log('I dont know what color is!')
    break;
}

//PERULANGAN FOR
for (let i = 1; i < 5; i++){
    console.log("PERULANGAN FOR")
    console.log(i)
}

//PERULANGAN WHILE
let h = 1
while (h < 5){
    console.log("PERULANGAN WHILE")
    console.log(h)
    h++
}