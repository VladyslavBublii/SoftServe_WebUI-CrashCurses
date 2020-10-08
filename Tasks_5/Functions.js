//1
(function (n,col) {
	var res = 1;
for (var i = 1; i <= col; i++) { 
	res = res*n;
}
console.log("Числo " + n + " умножить на себя " + col+" раз= "+ res);
}(16,4));

//2
(function (x,y) {
if (x>y) {console.log(x+" больше");}
else if (x<y) {console.log(y+ " больше");}
else{console.log("равно");}

console.log("Вы ввели 2 числа: "+x+" и  "+y);
}(16,16));

//3
(function (x) {
console.log("Вы ввели числа: "+x);

if (x>0) {x=1;}
else if (x<0) {x=-1;}
else{x=0}

console.log(x);
}(45));

console.log("");
//4
(function (x,y,calc) {
if (calc==1) {console.log(x-y);}
else if (calc==2) {console.log(x*y);}
else if (calc==3) {console.log(x/y);}
else{console.log(x+y);}

console.log("Вы ввели 2 числа: "+x+" и  "+y);
}(16,126,14));

//5
console.log("");

function getNumbers(num) {
	let res = []
	let base = 10
	let currNum = Math.abs(num)
	do {
		let baseShiftedNum = Math.floor(currNum / base)
		let diff = currNum - baseShiftedNum * base
		res.unshift(diff)
		currNum = baseShiftedNum
	} while (currNum > 0)
	return res
}

console.log(getNumbers(2342345));