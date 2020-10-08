var x1=prompt("Enter your value" ,"");

console.log(x1);

if (x1 >0) {x1++}
else if (x1 <0) {x1=x1-2}
else{x1=10}

console.log(x1);

//2
var x2=prompt("Enter your 2nd value" ,"");

console.log(x2);

if (x2>0 && x2%2==0) {console.log("+ and even")}
	else if (x2>0 && x2%2!=0) {console.log("+ and odd")}
		else if (x2<0 && x2%2==0) {console.log("- and even")}
			else if (x2<0 && x2%2!=0) {console.log("- and odd")}
else{console.log("it's 0 ")}

//3
var y4=5;
var y1=2,y3=2,y2=2;

if (y1 != y2 && y3) {console.log("1st")}
	else if (y2 != y1 && y3) {console.log("2nd")}
		else if (y3 != y1 && y2) {console.log("3rd")}
else(console.log("last "))

//4
var k = -2;
switch (k) {
case 1:
console.log("badly");
break;
case 2:
console.log("unsatisfactory");
break;
case 3:
console.log("satisfactorily");
break;
case 4:
console.log("good");
break;
case 5:
console.log("perfectly");
break;
default:
console.log("wrong data");
}
