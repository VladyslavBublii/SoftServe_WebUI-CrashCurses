//1
var calculator = {
  arg1:1,
  arg2:1,
read: function (){
    this.arg1 = prompt("Введите первый аргумент", 5);
    this.arg2 = prompt("Введите второй аргумент", 5);
},
sum: function (){
    return (this.arg2+this.arg1);
},
mul: function (){
	return (this.arg2)*(this.arg1);
},
};

calculator.read();
console.log(calculator.arg2);
console.log("");
console.log(calculator.sum());
console.log(calculator.mul());

console.log("");
//2

function MP3Player(name) { // Конструктор типа User
this.name = name;
this.displayInfo = function () {
console.log("Вы создали плеер с именем: " + this.name);
};
this.play = function (track) {
console.log(this.name + " играет песню " + track.name+ " размером " + track.size+" МБ");
 };
}
function track(name, size) { // Конструктор типа Car
this.name = name;
this.size = size;
}

console.log("");
//3
var Sony=new MP3Player("Sony");
Sony.displayInfo();
var Kongos=new track("Look at me",28);
Sony.play(Kongos);
console.log("");

console.log("");
//4
var salaries = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};

function topSalary(salaries) {

		  let max = 0;
		  let maxName = null;

		  for(const [name, salary] of Object.entries(salaries)) {
			if (max < salary) {
			  max = salary;
			  maxName = name;
			}
		  }

		  return maxName;
}
console.log("Самый высоко оплачиваемый сотрудник: "+topSalary(salaries));

console.log("");
//5
		function mul() {
			var answer = 1;
			var check = 0;
			
			for (var i = 0; i < arguments.length; i++){
				if (typeof(arguments[i])==="number"){
					answer *= arguments[i];
					check++;
				}
			}
			if (check == 0) 
				return 0;
				
			return answer;
		}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

console.log("");
//6
	var country = {
			   name: "Украина",
		   language: "украинский",
		   capital: {
			  name: "Киев",
			  population: 2907817,
			  area: 847.66
		   }
		};
		
function format(beginMsg, endMsg) {
   document.write(beginMsg + this.name + endMsg+"<br>");
}
		
format.call(country, "<", ">"); // "<Украина>"
format.apply(country, ["[", "]"]); // "[Украина]"
format.call(country.capital, '"', '"'); // ""Киев""
format.apply(country.capital, ["",""]); // "Киев"





