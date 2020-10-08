var a = 50;
var b = 7;

var i=b;
while (i <= a) { // Выполнится 3 раза
console.log(a-i);
i=i+b;
}

console.log("");
//2
let n = 1589;
let k = 1;

while (n >= 1) {
  k = n % 10;
  n /= 10;
  console.log(parseInt(k));
}

console.log("");
//3

let j = 15;
let o = 20;
let sum =0;

for (var i = j; i <= o; i++) {
	sum=sum+i;
	console.log(parseInt(sum));
}

console.log("");
//4

let h=5;
let log=1;

for (var i = 1; i <= h; i++) {
	log=log*i;
	console.log(parseInt(log));
}

console.log("");
//5

let sim =0;
let arr = new Array();
let count=0;
 while(arr[count]!==null){ 
 	arr[count] = window.prompt ("Vvedite chislo","");
 	console.log(arr[count]);
 	sim=sim+arr[count];
 	console.log(sim);
 }

// 6
console.log();

let chislo1=4;
let chislo2=9;
let cgt=1;

for (var i = chislo1; i < chislo2; i++) {
	if (cgt%2==0) {console.log(i);}
	else{console.log(i);
		 console.log(i);
	    }
	    cgt++;
}