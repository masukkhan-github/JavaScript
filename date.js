let myDate = new Date();
console.log("1 " + myDate)
console.log("2 "+myDate.toDateString())
console.log("3  "+myDate.toLocaleDateString())
console.log("4 "+myDate.toLocaleString())
console.log("5 "+myDate.toJSON())
console.log("6  "+myDate.toISOString())
console.log("7 "+myDate.toTimeString())
console.log("8 "+myDate.toString())

console.log(myDate.toLocaleString('default',{
    weekday:"long"
}))