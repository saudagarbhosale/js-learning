const name = "sambhaji"
const surName = "bhosale"
const fullname = name + " " +surName
console.log(fullname)
console.log("My name is "+"sambhaji" + " "+"bhosale") //outdated formate of string concating and printing
// new updated formate of string concating with back ticks
console.log(`my name is ${name}, my surname is ${surName}, full name is ${name} ${surName}`)
// one more option of string defination with new keyword (object)

const myNewPetName = new String("chikuchiku")
console.log(myNewPetName)
console.log(myNewPetName.at(1))
console.log(myNewPetName.charAt(9))
const str = "hello"
const str2= str.concat(" world")
console.log(str2)
console.log(myNewPetName.concat(" ", str))
console.log(myNewPetName.endsWith("chiku"))
const song = "kyu dikhe muje tu sirhane mere"
const word = "muje"
console.log(`this word ${word} ${song.includes ? "is" : "is no"} in include song`)
const str3 = "mai to tere nal hi rahana ji"
const wrd = "tere"; const inderoftere = str3.indexOf(wrd)
console.log(`${wrd} word index is ${inderoftere}`)

console.log(song.length)
console.log(song.replace("mere", "tere"))
console.log(song.replaceAll("tu", "test"))
console.log(song.split(" "))
const str4 = "google"
console.log(str4.substring(2, 5))
const str5 = "   tetstste   "
console.log(str5)
console.log(str5.trim())
// below are some string methods that is used in string operation for javascript

// anchor() >
// at()
// big()
// blink()
// bold()
// charAt()
// charCodeAt()
// codePointAt()
// concat()
// endsWith()
// fixed()
// fontcolor()
// fontsize()
// includes()
// indexOf()
// isWellFormed()
// italics()
// lastIndexOf()
// link()
// localeCompare()
// match()
// matchAll()
// normalize()
// padEnd()
// padStart()
// repeat()
// replace()
// replaceAll()
// search()
// slice()
// small()
// split()
// startsWith()
// strike()
// sub()
// substr()
// substring()
// sup()
// toLocaleLowerCase()
// toLocaleUpperCase()
// toLowerCase()
// toString()
// toUpperCase()
// toWellFormed()
// trim()
// trimEnd()
// trimStart()
// valueOf()
// [Symbol.iterator]()
// Instance properties
// length