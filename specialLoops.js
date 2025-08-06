const arr1 = ["a","b","c","d"]
for(const e of arr1){
    console.log(e)
}

for(const e in arr1){
    console.log(arr1[e])
}

arr1.forEach((element,index,arr)=>{
    console.log(element,index,arr)
})

