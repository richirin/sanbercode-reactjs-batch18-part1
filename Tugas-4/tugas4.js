// Soal 1
var i = 2;
while (i <= 20) {
  console.log(i + " - I love coding");
  i += 2;
}

// soal 2
for (i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 2 != 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 == 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}

// Soal 3
var pyramid = "";
for (i = 1; i <= 7; i++) {
  for (j = 1; j <= i; j++) {
    pyramid += "#";
  }
  console.log(pyramid);
  pyramid = "";
}

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
var arr = kalimat.split(" ");
console.log(arr);

// Soal 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];

var sortArr = daftarBuah.sort();
var arrToStr = sortArr.join("\n");

console.log(arrToStr);
// console.log(daftarBuah.sort().join("\n"));
