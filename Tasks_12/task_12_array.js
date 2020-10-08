let array = ["Джаз", "Блюз"];
array.push("Рок-н-Ролл");
array.splice(array.length-2, 1, 'Классика');
console.log(array);
let value = array.shift();
console.log(value,array)
array.unshift("Рок","Джаз")
console.log(array)

//2

Array.prototype.sortDesc = function(){
    this.sort((a, b) => a < b ? 1 : -1);
}
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]

//3

function deleteEvenNumbers(array1) {
    return array1.filter((value1)=>{ return value1 %2 != 0});  
 }
 var arr1 = [1, 2, 3, 4, 5];
 var arr1 = deleteEvenNumbers(arr1);
 console.log(arr1); // [1, 3, 5]
 
//4

let arr2 = ["Tom", "Sam", "Bob"];
let arrLength = [];
arrLength = arr2.map((a2)=> { return  "<li>" + a2 + "</li>"});
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]

//5

function matrixToArray(matrix) {
     return matrix.reduce((mas, currentMas)=>{
         return mas = mas.concat(currentMas);
     }, [])
 }
 let arr3 = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
 arr3 = matrixToArray(arr3);
 console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 