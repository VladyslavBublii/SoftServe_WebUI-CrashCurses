var arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // в консоль должно быть выведено 0
arr[arr.length - 1](); // в консоль должно быть выведено 2

