"use strict"

// -------------------- 1-masala start --------------------

// function generateArray(n) {
//     let result = [];
//     for (let i = n; i >= 1; i--) {
//       result.push(i);
//     }
//     return result;
//   }

//   let n = 5;
//   let array = generateArray(n);
//   console.log(array);

// -------------------- 1-masala end --------------------




// -------------------- 2-masala start --------------------

// function generateArray(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }

// let n = 5;
// let array = generateArray(n);
// console.log(array);

// -------------------- 2-masala end --------------------




// -------------------- 3-masala start --------------------

// function generateArray(n) {
//     let array = [];
//     let sum = 0;

//     for (let i = 0; i <= n; i++) {
//       array.push(i);
//       sum += i;
//     }

//     return { array, sum };
//   }

//   let n = 5;
//   let result = generateArray(n);

//   console.log(result.array);
//   console.log("Sum:", result.sum);

// -------------------- 3-masala end --------------------



// -------------------- 4-masala start --------------------

// let array = [];
// let oddSum = 0;
// let evenDiff = 0;

// for (let i = 0; i <= 10; i++) {
//   let value = i * 10;
//   array[i] = value;

//   if (i % 2 === 0) {
//     evenDiff += value;
//   } else {
//     oddSum += value;
//   }
// }

// console.log(array);
// console.log("Sum of Odd Indices:", oddSum);
// console.log("Difference of Even Indices:", evenDiff);

// -------------------- 4-masala end --------------------




// -------------------- 5-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Elementni kiriting[${i}]:`));
//   array.push(value);
// }

// let sum = array.reduce((acc, curr) => acc + curr, 0);
// console.log("Massiv:", array);
// console.log("Yig'indi:", sum);

// -------------------- 5-masala end --------------------





// -------------------- 6-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//     let value = parseInt(prompt(`Elementni kiriting[${i}]:`));
//     array.push(value);
// }

// let sortedArray = array.slice().sort((a, b) => b - a);

// console.log("Massiv (kamayish tartibida):", sortedArray);

// -------------------- 6-masala start --------------------





// -------------------- 7-masala start --------------------

// let a = {};
// a['ism'] = 'Kamol';
// a['yosh'] = 22;

// let toplam1 = { 'ism': 'Jack', 'yosh': 30 };
// let toplam2 = { 'ism': 'Emily', 'yosh': 25 };
// let toplam3 = { 'ism': 'Alex', 'yosh': 18 };

// let farq1 = Math.abs(a['yosh'] - toplam1['yosh']);
// let farq2 = Math.abs(a['yosh'] - toplam2['yosh']);
// let farq3 = Math.abs(a['yosh'] - toplam3['yosh']);

// console.log('1-toplamning yoshi bilan farqi:', farq1);
// console.log('2-toplamning yoshi bilan farqi:', farq2);
// console.log('3-toplamning yoshi bilan farqi:', farq3);

// -------------------- 7-masala start --------------------




// -------------------- 8-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Elementni kiriting[${i}]:`));
//   array.push(value);
// }

// let K = parseInt(prompt("K sonini kiriting:"));
// let L = parseInt(prompt("L sonini kiriting:"));

// let sum = 0;

// for (let i = K; i <= L; i++) {
//   sum += array[i];
// }

// console.log(`K va L indekslar orasidagi elementlar yig'indisi: ${sum}`);

// -------------------- 8-masala end --------------------





// -------------------- 9-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Elementni kiriting[${i}]:`));
//   array.push(value);
// }

// let maxEvenIndex = -1;
// let maxEvenValue = -Infinity;

// for (let i = 0; i < n; i++) {
//   if (i % 2 === 0 && array[i] > maxEvenValue) {
//     maxEvenValue = array[i];
//     maxEvenIndex = i;
//   }
// }

// console.log(`Juft indekslari ichidan eng katta element: ${maxEvenValue} (indeks: ${maxEvenIndex})`);

// -------------------- 9-masala end --------------------





// -------------------- 10-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Elementni kiriting[${i}]:`));
//   array.push(value);
// }

// let minEvenIndex = -1;
// let minEvenValue = Infinity;

// for (let i = 0; i < n; i++) {
//   if (i % 2 === 0 && array[i] < minEvenValue) {
//     minEvenValue = array[i];
//     minEvenIndex = i;
//   }
// }

// console.log(`Juft indekslari ichidan eng kichik element: ${minEvenValue} (indeks: ${minEvenIndex})`);

// -------------------- 10-masala start --------------------





// -------------------- 11-masala start --------------------

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let array = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt(`Elementni kiriting[${i}]:`));
//   array.push(value);
// }

// let maxOddIndex = -1;
// let maxOddValue = -Infinity;

// for (let i = 1; i < n; i += 2) {
//   if (array[i] > maxOddValue) {
//     maxOddValue = array[i];
//     maxOddIndex = i;
//   }
// }

// console.log(`Toq indekslar orasidan eng katta element: ${maxOddValue} (indeks: ${maxOddIndex})`);

// -------------------- 11-masala start --------------------
