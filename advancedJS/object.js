// console.log(Math.PI)
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))


let obj= {
    name: "masuk",
    age:12,
    gender:"M",
    getName : function(){
        console.log(this.name)
    }
}
Object.defineProperty(obj,"name",{
    enumerable:false
}
)

for (let key in obj) {
    if(typeof(obj[key]) !== 'function'){
        console.log(`${key}:${obj[key]}`)
    }
   
}


console.log(Object.getOwnPropertyDescriptor(obj,"name"))

