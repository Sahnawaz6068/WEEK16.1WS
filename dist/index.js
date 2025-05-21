"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import ws-server from ws
const ws_1 = require("ws");
//create a websocket server
const wss = new ws_1.WebSocketServer({ port: 8080 });
// //event Handler
// wss.on("connection",function(socket){
//     console.log("User connected");
//     setInterval(()=>{
//         //Message to clint
//         socket.send("current Price of solana is ="+Math.random()*1000)
//     },500);
//     //Message from clint side
//     socket.on("message",(e)=>{
//         console.log(e.toString());
//     })
// });
//event Handler
wss.on("connection", function (socket) {
    console.log("User connected");
    //Message from clint side
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        else {
            socket.send("abe bsdk ka sahi se khel le");
        }
    });
});
// import { WebSocketServer } from "ws";
// //Express server
// import express from "express";
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("Hello Exress server");
// })
// app.post("/post",(req,res)=>{
//     res.status(200).send("Post request is here")
// })
// let server1=app.listen(8081);
// const wss=new WebSocketServer({server:server1});
// let user=0;
// wss.on("connection", function(socket){
//     user++
//     console.log("user connected");
//     //jab socket on hai message bhejo
//     socket.on("message",(e)=>{
//         socket.send("Hello everybudy",function(){
//             console.log("Hello console se")
//         })
//     })
//     socket.send("A general Joining message",function(){
//         console.log("a general joining message from console");
//     });
//     //Concluding here socket.on need 1.A/One string and/or A function 
//     //S
//     socket.on('error',function (error){
//         console.log(error);
//     })
//     console.log(user);
// })
