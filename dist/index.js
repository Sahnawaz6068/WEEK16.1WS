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
            socket.send("abe bsdk ka sahi se l]khel le");
        }
    });
});
