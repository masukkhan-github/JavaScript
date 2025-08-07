const arr1 = [1,2,3,4,5,6]
// const newArr = arr1.filter((e,i,arr)=>{
//     console.log(e,arr,i)
//     return e>=5
// })
// console.log(newArr)


const newArr2 = []
// arr1.forEach((e)=>{
//     if(e>=5){
//         newArr2.push(e)
//     }
// })

// console.log(newArr2)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks = books.filter((bk)=>{
    return bk.publish>= 2000 && bk.genre ==='Science'
})

console.log(userBooks)

userBooks.forEach((e)=>{
    console.log(e.genre)
}
)

const map = arr1.map((e)=>{
return e*10
}).filter((e)=> e>50)

console.log(map)

arr1.forEach((e)=>{
    newArr2.push(e*10)
})

console.log(newArr2)

const reduce = [1,2,4]
const v = reduce.reduce((acc,curr)=> {
    console.log(`acc is ${acc} curr ${curr} `)
  return  acc+curr
},0)
console.log(v)





const obj = [
    {
        price:200
    },
    {
        price:300

    },
    {
        price:400
    }
]

console.log(obj.reduce((acc,item)=>{
    return item.price + acc
} , 0))