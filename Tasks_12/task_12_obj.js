let rect = { 
    topLeft: {x1: 1, y1: 13},
    bottomRight: {x2: 3, y2: 5}, 
    toString: function () { 
        return  `topleft [${this.topLeft.x1}; ${this.topLeft.y1}], bottomRight [${this.bottomRight.x2}; ${this.bottomRight.y2}]` 
    }, 
    valueOf: function () { 
        return  2*((this.bottomRight.x2- this.topLeft.x1) +(this.topLeft.y1- this.bottomRight.y2)); 
    } 
}; 
console.log(rect.toString());  
console.log(rect.valueOf()); // 20
