'use strict';

function sort(arr) {
  var len = arr.length;

  if (len < 2) {
    return arr;
  }

  var mid = parseInt(len / 2);

  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(sort(left), sort(right));
}

function merge(left, right) {
  var arr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr.concat(left, right);
}

module.exports = sort;