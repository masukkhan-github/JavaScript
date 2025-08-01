const h1 = ["a","b","c",["d","e","f",["a","b","c",["d","e","f"]]]]
const h2 = ["d","e","f"]

 h1.push(h2)
console.log(h1)

const h3 = h1.concat(h2)
console.log(h3)

const h4 = [...h1,...h2]

console.log(h4)

const h5 = h1.flat(Infinity)
console.log(h5)

console.log(Array.isArray("Masuk"));
console.log(Array.from("Masuk"));
console.log(Array.from({name : "Masuk"}));//how to get the name

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))

