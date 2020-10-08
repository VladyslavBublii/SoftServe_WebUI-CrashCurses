let str = "Login1,LOgin2,login3,loGin4";
str = str.toLowerCase();
str = str.split(',');
console.log(str);

let arr = [];
let table = document.getElementById('table');

let string =  '';
while(!string.includes('end')){
    string = prompt('Enter string', '');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerHTML = string;
    if(string.search(/\d/) == -1){
        td2.innerHTML = 'No numbers: ' + string;
    }else{
        td2.innerHTML = 'Numbers: ' + string;
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
} 