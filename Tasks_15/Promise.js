function createPromiseRandom(min, max, delay) {
   return new Promise(function (resolve, reject) {
		setTimeout( 
			 () => {
				if (min <= max){
				resolve(Math.floor(Math.random() * (max - min) + min));
				}
				else{
				reject(new Error("min > max!"));
				}
			 },
		 delay
	  );
   });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then(result => document.write( result + "<br>"),
error => document.write( error + "<br>")); 

let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(result => document.write( result + "<br>"),
error => document.write( error + "<br>"));  

//2
console.log("");

new Promise(function (resolve, reject) {		   
		let number = prompt("Enter value", 0);
		let re = /^[0-9]+$/g;			 
					if (re.test(number))
				resolve(number);
			else
				reject(new Error("Error"));		   
		}).catch(function (error) {
return new Promise(function (resolve, reject) {
		let number;
		let re = /^[0-9]+$/g;			  
		do{
			alert(error);
			number = prompt("Enter value again", 0);
		}while(!re.test(number));
		resolve(number);
	   });
	   	}).then(function (result) {
	alert(result);
});
