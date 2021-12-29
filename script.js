function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function add(accumulator, a) {
  return accumulator + a;
}
function calculateSum(arr, maxSum, minSum) {
  maxSum = arr.filter((el, i) => i !== 0).reduce((x, y) => add(x, y));
  minSum = arr
    .filter((el, i) => i !== arr.length - 1)
    .reduce((x, y) => add(x, y));

  // print result
  alert('Your Input: \n' + arr + '\n Your OutPut\n' + minSum + ' ' + maxSum);
}

function SumHandler() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const num3 = document.getElementById('num3').value;
  const num4 = document.getElementById('num4').value;
  const num5 = document.getElementById('num5').value;

  let maxSum = 0;
  let minSum = 0;

  const arr = [
    parseInt(num1),
    parseInt(num2),
    parseInt(num3),
    parseInt(num4),
    parseInt(num5),
  ];
  // sort array by ascendence
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  //cal min max sum
  if (num1 !== '' && num2 !== '' && num3 !== '' && num4 !== '' && num5 !== '') {
    calculateSum(arr, maxSum, minSum);
  } else {
    return;
  }
}
