let arr = [10, 80, 30, 90, 40, 50, 70];

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
  console.log(pivot);
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

quicksort(arr, 0, arr.length - 1);
