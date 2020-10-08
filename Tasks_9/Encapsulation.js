//1

function  audioPlayer(volume){
     this.__volume = volume; 
}
audioPlayer.prototype.getVolume = function(){ 
    return this.__volume;
}
audioPlayer.prototype.setVolume = function(volume){
    if(volume >= 0 && volume <= 100){
        this.__volume = volume; 
    }else{
        console.log('range volume 0 - 100');
    }
}
audioPlayer.prototype.volume = function(volume){ 
    if(volume === undefined) { 
        return this.__volume; 
    }else{ 
        if(volume >= 0 && volume <= 100){
            return this.__volume = volume;
        }
    }
}; 

//2
console.log("");

function Sum(firstNumber, secondNumber) {
    this._firstNumber = firstNumber;
    this._secondNumber = secondNumber;
    this.result = this._firstNumber + this._secondNumber;
    this._calc = function(){
        return this.result = this._firstNumber + this._secondNumber;   
    }
}
Sum.prototype.firstNumber = function(number){
    if(+number === number){
        this._firstNumber = number;
        console.log(this._calc());
    }else{
        console.log('it\'s not a number');
    }
}
Sum.prototype.secondNumber = function(number){
    if(+number === number){
        this._secondtNumber = number;
        console.log(this._calc());
    }else{
        console.log('it\'s not a number');
    }
}
let number = new Sum(70, 120);
console.log(number.result); //30
number.firstNumber(430); //50

//3
console.log("");

function Figure(center) {
    this.__center = center;
    this.getCenter = () => {
        return this.__center;
    }
    this.setCenter = (center) =>{
        this.__center = center;
    }
}
function Rect(diagonal, center) { 
    Figure.call(this, center);
    this.__diagonal = diagonal; 
} 
Rect.prototype = Object.create(Figure.prototype); 
Rect.prototype.constructor = Rect; 
Rect.prototype.info = function () { 
    console.log('Center = ' + this.__center + ' Diagonal = '+ this.__diagonal)
};  

function Rect(radius, center) { 
    Figure.call(this, center);
    this.__radius = radius; 
} 
Rect.prototype = Object.create(Figure.prototype); 
Rect.prototype.constructor = Rect; 
Rect.prototype.info = function () { 
    console.log('Center = ' + this.__center + ' radius = '+ this.__radius)
};  

let rec = new Rect(88, 14);
rec.info()

//4
console.log("");

function Square(side) {
    this._side = side;
    this.getSide = () => {
        return this._side;
    }
    this.setSide = (side) =>{
        this._side = side;
    }
    this.perimeter = () => {
        return this._side*4;
    }
}
//1
function Cube(side) { 
    Square.call(this, side);
    this.perimeter = () => {
        return this._side*12;
    }
}  

let fig = new Cube(10)
console.log(fig.perimeter());