// 1 
class MP3{ 
    constructor(volume){ 
        this.volume = volume; 
    } 
    get volume() { 
        return this.volume; 
    } 
    set volume(volume){ 
        this.volume = volume; 
    } 
    display() { 
        console.log(this.volume); 
    } 
} 

// 2
class Figure{
    constructor(center){ 
         this.__center = center;
    }
    get center() {
      return this.__center;
    }
    set center(value) {
        this.__center = value;
    }
} 

class Rectangle extends Figure{ 
    constructor(center, diagonal){ 
        super(center);
        this.__diagonal = diagonal;
   } 
    get diagonal() {
        return this.__diagonal;
    }
    set diagonal(value) {
        this.__diagonal = value;
    }
    info(){
        console.log(`Center = ${super.center}, Diag =  ${this.__diagonal}`)
    }
}


class Circle extends Figure{
    constructor(center, radius){
        super(center);
        this.__radius = radius;
    }
    get radius() {
        return this.__radius;
    }
    set radius(value) {
        this.__radius = value;
    }
    info(){
        console.log(super.center(), this.__radius)
    }
}

let f = new Rectangle(4, 5)
f.center = 5;
f.diagonal = 2;
f.info()


//3
class square{
    constructor(side){
        this._side = side
    }
    get side(){
        return this._side;
    }
    set side(value){
        this._siae = value;
    }
    perimeter(){
        return this._side*4;
    }
}

class cube extends square{
    constructor(side){
        super(side)
    }
    // perimeter(){
    //     return this._side*12;
    // }
    perimeter(){
        return super.perimeter()*3;
    }
}

let q = new cube(2)
console.log(q.perimeter())

// Задание №4
class circle{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    circumference(){
        return 2*3.14*this.radius;
    }
    static statcircumference(radius){
        return 2*3.14*radius;
    }
    static createCircle(x,y,radius) { 
        return new circle(x,y,radius); 
    }
    check(x,y){
        if(Math.pow(((x - this.x)^2 + (y - this.y)),2) <= this.radius*this.radius){
            console.log('True')
        }else{
            console.log('False')
        }
    }
    toString(){
        return console.log(`X:${this.x}, Y:${this.y}, Radius:${this.radius}`)
    }
}
let c = new circle(5, 6, 10);
console.log(c.circumference());
c.check(3,5);
c.toString();