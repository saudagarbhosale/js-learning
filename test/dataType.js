let name = "raj"
let num = 4354

//dataTypes primitive
//number rage 2 power of 53
//bigint
//String = ""
//boolean = true/false
//null = standalone value
//undefine = unefine
//symbol = unique

//non -primitive datatype
//object

console.log(typeof "raj")
console.log(typeof num)

const arrayvalue =["test", 122, false]
console.log(arrayvalue)

const myObj = {
    myname : "raje",
    num : 223,
    boo : true
}

console.log(typeof myObj)
console.log(myObj)
const myFun = function() {
    console.log("hello world")
}
console.log(typeof myFun)


////stack (primitive) memory // its provide copy of value in stack
let names = "raj"
let name1 = names
console.log(name1)

//and heap (non primitive) memory // its provide direct reference of value in heap
let useOne = {
    email: "raj@raj.com",
    id: 124
}

let useTwo = useOne
useTwo.email = "sam@sam.com"
console.log(useOne.email)
console.log(useTwo.email)
