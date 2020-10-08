//1
var user = {}; 
user.name = "Cris"; 
user.surname = "Simons";
user.name="Brain";

console.log(user.name);
delete user.name;
console.log(user.name);

console.log("");
//2
var car = {}; 
car.model="Urus";
car.speed=350;

car.run = function () {
console.log(car.model+" едет со скоростью "+car.speed);
};

car.stop = function () {
console.log(car.model+" остановилась");
};

car.run();
car.stop();
console.log("");

var car1 = {};
car1["model"] = "Veyron";
car1["speed"] = 450;
car1["run"] = function () {
console.log(car1.model+" едет со скоростью "+car1.speed);
};
car1["stop"]=function(){
	console.log(car1.model+" остановилась");
}

car1["run"](); 
car1["stop"]();
console.log("");

var car2 = {
model: "Ford",
speed: 46,
run: function () {
console.log(car2.model+" едет со скоростью "+car2.speed);
},
stop: function () {
console.log(car2.model+" остановилась");
}
};

car2.run();
car2.stop();
console.log("");

//3
var tv= {
currentChannel: 1,
nextChannel: function () {
this.currentChannel++;
},
previousChannel: function (){
this.currentChannel--;	
},
setChannel: function(number) {
	this.currentChannel=number;
}
};

tv.setChannel(29);
tv.previousChannel();
console.log(tv.currentChannel);
console.log("");

//4
var mp3player= {
number_of_Track : 1,
nextTrack : function () {
    this.number_of_Track++;
},
previousTrack: function (){
    this.number_of_Track--;	
},
setChannel: function(number) {
	this.number_of_Track=number;
},
info:function(){
    console.log("Сейчас играет трек по номером "+this.number_of_Track);
}
};

mp3player.nextTrack();
mp3player.info();

console.log("");

//5
var Emploer = {
Emploers: [
{
Name: "John",
Age: 28,
Experience:1,
Languages: ["Java", "JavaScript", "SQL"],
}, {
Name: "Bill",
Age: 30,
Experience:5,
Languages: ["HTML", "CSS", "JavaScript"],
}, {
Name: "Mike",
Age: 32,
Experience:4,
Languages: ["Python", "SQL"],
}
] };

for (var i = 0; i < Emploer.Emploers.length; i++) {
console.log(Emploer.Emploers[i]);
console.log("");
}

console.log("")
//6

function isEmpty(obj){
if(obj !=undefined) {return true}
else {return false};
}; 

console.log(isEmpty(Emploer));

console.log("");


var salaries = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 650
};

var sum=0;
count=0;
for (var key in salaries) {
sum=sum+salaries[key];
count++;
}

console.log(sum/count);