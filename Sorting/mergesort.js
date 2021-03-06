let arr = [38, 27, 43, 3, 9, 82, 10];

let MergeSort = function (arr, first, last) {
  if (first === last) return;
  let mid = Math.floor(first + (last - first) / 2);
  MergeSort(arr, first, mid);
  MergeSort(arr, mid + 1, last);
  Merge(arr, first, mid, last);
};

let Merge = function (arr, first, mid, last) {
  let len1 = mid - first + 1;
  let len2 = last - mid;
  let left = new Array(len1),
    right = new Array(len2);

  for (let i = 0; i < len1; i++) {
    left[i] = arr[first + i];
  }

  for (let i = 0; i < len2; i++) {
    right[i] = arr[mid + 1 + i];
  }

  let i = 0,
    j = 0,
    k = first;

  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < len1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < len2) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

MergeSort(arr, 0, arr.length - 1);
