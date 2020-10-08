let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray", 
    fourth: "Bob"
 };
 let {first:f,  third: f2, fifth="Name №5"} = names;
 console.log(f); // "Tom"
 console.log(f2); // "Ray"
 console.log(fifth); // "Name №5"
 

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [21, 25, 23, 28],
 };
 let {names: [,name2,,name4], ages:[,age2, , age4] }= data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26

 //2
 console.log("");

 let name = {
    first: "Tom",
    second: "Sam",
    third: "Ray"
 };
 console.log(`"Первый: -${name.first}-, Второй - "${name.second}", Третий => '${name.third}"`); 
 // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"
 
 //2
 function format(s, ...v) {
    
 }
 let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
 console.log(res1);
 let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
 console.log(res2);
 let res3 = format`left ${"<->"} right`; // "right <-> left"
 console.log(res3);

 //3
console.log("");

function mul(...res) {
  return  res.reduce(function(total, current){
            if(+current === current){
               return total +=current;
            }else{
                return total;
            }
    },0)
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 

 //2
 let obj = {
    name: "obj",
    print: ()=>{console.log(obj.name)}
 };
 function multiCaller(func, count) {
    for (let i = 0; i < count; i++) {
       func();
    }
 } 
 multiCaller(obj.print, 3);  // "obj", 3 раза
 
 //3
 let server = {
   data: 0,
   convertToString: function (callback) {
      callback(( ()=> {
         return this.data + "";
      }));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return ((callback)=> {
         this.result = callback();
      });
   }
};
client.calc(256);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
