let arr = [6, 2, 8, 34, 4, 10];
const n = arr.length;

for (let i = 0; i < n; i++) {
	let minIndex = i;
	for (let j = i + 1; j < n; j++) {
		if (arr[j] < arr[minIndex]) {
			minIndex = j;
		}
	}
	let temp = arr[i];
	arr[i] = arr[minIndex];
	arr[minIndex] = temp;
}
console.log(arr);
