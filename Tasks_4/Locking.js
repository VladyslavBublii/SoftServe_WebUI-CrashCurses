function createArrayIterator(array) {
			    var numberOfIndex = -1;
			return function () {
				numberOfIndex++; 
				if(array[numberOfIndex]==undefined){
					return 'undefined';
				}
				else{
					return array[numberOfIndex];
				}
			};
}
function createSafeSQR() {
var num1 = 0;
var num2 = 0;
var arr = [];
arr[0] = function (newNum1,newNum2) {
if ((newNum1 >= 0)&(newNum2 >= 0)) {
num1 = newNum1;
num2 = newNum2;
}
};
arr[1] = function () {
return num1*num2;
};
arr[2] = function () {
return num1+num2;
};
return arr;
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

//2
var sqr = createSafeSQR();
sqr[0](9,5);
console.log(sqr[1]());
console.log(sqr[2]());

console.log(" ");

