/**
 * @param {number[]} piles
 * @return {number}
 */
let piles = [9, 5, 6, 8, 10, 1, 4, 10, 7];

let swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let quicksort = function (arr, first, last) {
  if (first < last) {
    let pivotIndex = partition(arr, first, last);
    quicksort(arr, first, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, last);
  }
};

let partition = function (arr, first, last) {
  let pivot = arr[last];
  let j = first - 1;
  for (let i = first; i < last; i++) {
    if (arr[i] < pivot) {
      j++;
      swap(arr, i, j);
    }
  }
  j++;
  swap(arr, j, last);
  return j;
};

var maxCoins = function (piles) {
  quicksort(piles, 0, piles.length - 1);
  let tripletCount = piles.length / 3;
  let count = 0;
  for (let i = tripletCount; i < piles.length - 1; i += 2) {
    count = count + piles[i];
  }
  return count;
};

console.log(maxCoins(piles));
