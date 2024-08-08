// console.log("hello world");

// inbuilt Modules => os ->

// const info = require('os')

// console.log(info.hostname());

// console.log(info.homedir());

// console.log(info.cpus());

// console.log(info.machine());

// console.log(info.userInfo());

// file system -> fs -> sync , async (CRUD)

// const file = require('fs')

// console.log(file);

// async : 

// file.readFile("helo.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// file.writeFile("helo.txt","MY name is Dhoni",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
// })

// file.appendFile("helo.txt","My age is 43",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
// })


// file.rename("hello.pdf","helo.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
// })

// file.unlink("home.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
// })

// const http = require("http")
// const dotenv = require("dotenv")
// dotenv.config()

// const server = http.createServer((req,res)=>{
// res.writeHead(200,{'content-Type' : 'application/json'})
// res.write("[{name:Dhoni,age:43},{name:Sachin,age:50}]")
// res.end()
// })

// const port = process.env.PORT

// server.listen(port,()=>{
//     console.log(`server started at : http://localhost:${port}`);
// })

// http and fs :

const http = require("http")
const fs = require("fs")
require("dotenv").config()

const port = process.env.port

// const server = http.createServer((req,res)=>{
//     let today = new Date().toDateString()
//     fs.writeFileSync("currentDate.txt",`${today}`)
//     fs.appendFileSync("currentDate.txt"," is today date")
//     const data = fs.readFileSync("currentDate.txt")
//     const mydate = data.toString();
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write(`<h1> ${mydate} : good day</h1>`)
//     res.end()
// })

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("data.json")
    const myJSON = data.toString();
    res.writeHead(200,{"content-type":"application/json"})
    res.write(`${myJSON}`)
    res.end()
})

// internal module + http(inbuild Module) : 

// const details = require("./index2")
// // details =  { name :"Muthamizh Selvan" , age : 25 }
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write(`<h1>Hello My name is ${details.name}, My age is ${details.age}</h1>
//         <p>Today Date is ${details.todayDate}</p>
//         `)
//     res.end()
// })

server.listen(port,()=>{
    console.log(`server started in port : http://localhost:${port}`);
})


