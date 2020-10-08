function addTwoDays(date){
    date.setDate(date.getDay()+2)
    return  date; 
}
let data = new Date()
console.log(addTwoDays(data));