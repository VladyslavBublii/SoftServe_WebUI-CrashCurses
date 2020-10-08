//1
const user = {
  name: "Tom"
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

//decorators
let tomFormat = function(left, right) { 
  format.call(user,left, right)  
};
tomFormat("<<<", ">>>");  

//bind
tomFormat = format.bind(user);  
tomFormat("<<<", ">>>");  

//2
console.log("");

function mul(a, b) {
    return a * b;
 }
 let doubleMul = mul.bind(null, 2)
 let qudraMul = mul.bind(null, 4)
 
 console.log(doubleMul(5)); // 10
 console.log(qudraMul(5)); // 20

 //3
 console.log("");

 function bind(func, context) {
      return func.apply(context);
}
function func() {
   console.log(this.name + " - "+ this.age);
}
let users = {
   name: "Mark",
   age: 20
};
let f = function(){bind(func, users)}; 
f();// "Tom – 20"

 //4
 console.log("");
