// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const alphabet = 'NEGIE1';

const reverseString = (str) => {
	let number = '';
	let letter = [];
	const arrStr = [...str];

	arrStr.forEach((value) => {
		if (isNaN(parseInt(value))) {
			letter.push(value);
		} else {
			number += value;
		}
	});
	console.log(letter.reverse().join('') + number);
};
reverseString(alphabet);

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
const sentence = 'Saya sangat senang mengerjakan soal algoritma';

const longest = (str) => {
	let longestWord = '';
	str.split(' ').forEach((word) => {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	});

	console.log(`${longestWord}: ${longestWord.length} characters`);
};
longest(sentence);

// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = (input, query) => {
	const result = query.map((word) => {
		let arrayFilter = input.filter((item) => item === word);
		return arrayFilter.length;
	});
	console.log(result);
};
OUTPUT(INPUT, QUERY);

// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
const Matrix = [
	[1, 2, 0],
	[4, 5, 6],
	[7, 8, 9],
];

const calculateDiagonal = (matrix) => {
	let sumFirstDiagonal = 0;
	let sumSecondDiagonal = 0;
	matrix.forEach((value, index) => {
		sumFirstDiagonal += value[index];
		sumSecondDiagonal += value[matrix.length - 1 - index];
	});
	console.log(sumFirstDiagonal - sumSecondDiagonal);
};
calculateDiagonal(Matrix);
