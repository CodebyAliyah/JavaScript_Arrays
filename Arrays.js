
Arrays : 

const great_Heros = [ "Quaid_e_Azam" , "Dr.AbdulQadeer" , "Sadar_Saddam", "Imran_Khan" , "Che_Gavara"]

console.log(great_Heros)

 great_Heros.push("Qazafi")

//  .push used for add one value last im array.

console.log(great_Heros)

great_Heros.pop()

// .pop used for remove on value end oo array.
console.log(great_Heros)

great_Heros.unshift("Illama Iqbal")

// .unshift used for add one value start of array.
console.log(great_Heros)

great_Heros.shift()

// .shift used for remove one value start of array.
console.log(great_Heros)


let Number_Num = great_Heros.includes("Sadar_Saddam")

console.log(Number_Num)


console.log (great_Heros.indexOf("Imran_Khan"))

console.log(great_Heros)



let gameNumber = [2, 4, 5, 7, 8, 9, 10]

console.log(gameNumber)

const newArray = gameNumber.join()
// join function used for convert  number into string.

console.log(gameNumber)

console.log(typeof newArray)

const ayn1 = gameNumber.slice(1,5)
// .slice used for check thee index number between start_range & end_range.

const ayn2 = gameNumber.splice(2,6)

console.log("A" + gameNumber)
console.log("B" + ayn1)
console.log( "C"   + ayn2)

















