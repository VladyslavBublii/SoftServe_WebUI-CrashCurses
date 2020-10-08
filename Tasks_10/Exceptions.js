function sumSliceArray(arr, first, second){ 
    console.log(first, second, arr )
    if(first < arr.length && first > -1 && second < arr.length && second > -1){
        if (+first !== first && +second !== second) { 
            throw new Error("Erroe"); 
        }else{
            return arr[first] + arr[second];
        } 
    }else{
        return null;
    }
} 
try { 
    let arr = [1,2,3,4,4,4,5,6];
    let  first = 2, second = 4;
    var res = sumSliceArray(arr, first, second); 
    console.log(res); 
} catch (error) { 
    console.log(error.name); 
    console.log(error.message); 
    console.log(error.stack); 
}

//2
console.log("");

function perimeter (a, b) {
    checkSide(a);
    checkSide(b);
    if(checkSide(a) && checkSide(b)){
        return 2 * (a + b);
    }else{
        return false;
    }
    
}

function area (a, b) {
    checkSide(a);
    checkSide(b);
    if(checkSide(a) && checkSide(b)){
        return  a * b;
    }else{
        return false;
    }
}

//3
console.log("");

function checkSide(value) {
    if( value >= 0){
        if (!Number.isFinite(value)){
            throw new Error("not number.");
        }else if(+value === value){
            return value;
        }
    }else{
        console.log('Value < 0');
    }
    
} 
console.log(perimeter(180, 360));
console.log(area(154, 134));

