function CoinDeterminer(num){
	
	var e11s = Math.floor(num / 11);
	num = num - e11s * 11;
	var n9s = Math.floor(num / 9);
	num = num - n9s * 9;
	var s7s = Math.floor(num / 7);
	num = num - s7s * 7;
	var f5s = Math.floor(num / 5);
	num = num - f5s * 5;
	var o1s =  num;

	
	leastCoins = e11s + n9s + s7s + f5s + o1s;
	return leastCoins;
	
}

// Input = 6 Output = 2
// Input = 16 Output = 2
var assertEqual = function(actual, expected){
  console.log(actual === expected ? 'PASS' : 'FAIL');
}

assertEqual(CoinDeterminer(16), 2);
assertEqual(CoinDeterminer(6), 2);
