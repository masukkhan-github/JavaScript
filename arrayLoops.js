let arr = [1,2,3,4,5,6]
let str = "Masuk Khan"

for (const e of arr) {
    console.log(e)
}

for(const s of str){
    console.log(s)
}


let arr2 = [
    {
        language:"java",
        code:"java"
    },
    {
        language:"javascript",
        code:"js"

    },
    {
        language:"Python",
        code:"py"
    }
]

arr2.forEach((e,index,arr)=>{
    console.log(e.code, index, arr)
})