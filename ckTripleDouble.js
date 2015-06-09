function TripleDouble(num1, num2) {
  console.log('num1: ', num1);
  console.log('num2: ', num2);
  num1 = ' ' + num1;
  num2 = ' ' + num2;
  num1.split('');
  num2.split('');
  var firstTriple = false;
  var secondDouble = false;
var result = 0;
  for (var i = 0; i < num1.length; i++) {
    if (num1[i] === num1[i + 1] &&  num1[i + 1] === num1[i + 2]) {
      firstTriple = true;
    }

  }
  console.log('firstTriple: ', firstTriple);
  for (var j = 0; j < num2.length; j++) {
    if (num2[j] === num2[j + 1]) {
      secondDouble = true;
    }

  }
  console.log('secondDouble: ', secondDouble);
  if(firstTriple === true && secondDouble === true){
    result = 1;
  } else {
    result = 0;
  }
  console.log('result', result);
  return result;
}

var assertEqual = function(actual, expected) {
  console.log(actual === expected ? 'PASS' : 'FAIL');
}

assertEqual(TripleDouble(465555, 5579), 1);
assertEqual(TripleDouble(67844, 66237), 0);
