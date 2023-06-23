function mergesort(arr) {
  // base case which is sorted
  if (arr.length == 1) return arr;

  // recursive case
  let left_half = arr.slice(0, arr.length / 2);
  let right_half = arr.slice(arr.length / 2, arr.length);
  return merge(mergesort(left_half), mergesort(right_half));
}

function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;

  let arr = [];
  while (p1 < arr1.length || p2 < arr2.length) {
    if (p1 === arr1.length) {
      arr = arr.concat(arr2.slice(p2, arr2.length));
      break;
    }
    if (p2 === arr2.length) {
      arr = arr.concat(arr1.slice(p1, arr1.length));
      break;
    }
    if (arr1[p1] < arr2[p2]) {
      arr.push(arr1[p1]);
      p1++;
    } else {
      arr.push(arr2[p2]);
      p2++;
    }
  }

  return arr;
}
