//import ws-server from ws
import { WebSocketServer } from "ws";
//create a websocket server
const wss=new WebSocketServer({port:8080});

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
wss.on("connection",function(socket){
    console.log("User connected");
    
    //Message from clint side
    socket.on("message",(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong")
    }else{
        socket.send("abe bsdk ka sahi se khel le")
    }
    })
});
