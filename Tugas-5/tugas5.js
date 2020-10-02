// Soal 1
var halo = function () {
  return "Halo Sanbers!";
};

console.log(halo()); // "Halo Sanbers!"

// Soal 2
var kalikan = function (num1, num2) {
  return num1 * num2;
};

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

// Soal 3
var introduce = function (name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    ", alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby
  );
};

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objDaftarPeserta = {
  namaPeserta: arrayDaftarPeserta[0],
  genderPeserta: arrayDaftarPeserta[1],
  hobbyPeserta: arrayDaftarPeserta[2],
  tglLahirPeserta: arrayDaftarPeserta[3],
};

console.log(objDaftarPeserta);

// Soal 5
var buahBuahan = [
  { nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000 },
  { nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah ",
    adaBijinya: "ada",
    harga: 10000,
  },
  { nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: 5000 },
];

console.log(buahBuahan);

// Soal 6
var dataFilm = [];
var addData = {
  namaFilm: "aku ini anak siapa",
  durasi: "2 jam",
  genre: "Horor",
  tahun: 2000,
};

var pushData = function (arr, obj) {
  arr.push(obj);
  return arr;
};

console.log(pushData(dataFilm, addData));
