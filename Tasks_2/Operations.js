var side_square=25;
var area = side_square*side_square;

alert(area);

var Single_of=side_square%10;

alert(Math.floor(side_square/10));
alert(Single_of);

var number1=8;
var number2=12;
var number3=15;

if ((number1 > 12) && (number2 <= 3) ) {
  alert(' True ');
} else {
  alert( ' false ' );
};

if ((number1 < number2) && (number2 < number3)) {
  alert(' True ');
} else {
  alert( ' false ' );
};

var number4=353;
if ((number4 % 1000 === 0) && (number4 % 2 !==0 )) {
  alert(' True ');
} else {
  alert( ' false ' );
};