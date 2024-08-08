const myName = "ABCD"

const myAge = Math.floor(Math.random()*100)

let today = new Date().toDateString()


module.exports.name = myName

module.exports.age = myAge

module.exports.todayDate = today


// { k:v , k:v } => { name :"Muthamizh Selvan" , age : 25 , todayDate: "Thu Aug 08 2024",  }