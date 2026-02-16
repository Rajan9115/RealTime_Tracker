import express from 'express'
import http, { createServer } from 'http'
import { Server } from 'socket.io';

import path from 'path';




const port =3000;
const users = {}; // store connected users
const app = express();

//socket io setup
const server = http.createServer(app);
const io = new Server(server);

//ejs setup
app.set("view engine","ejs");



//static folder
app.use(express.static("public"));


io.on("connection", (socket)=>{
    console.log("user connected",socket.id)
    // Send existing users to the newly connected user
    socket.emit("existing-users", users);

    socket.on("send-location",(data)=>{
        // Save/update user location
        users[socket.id] = data;
        //Broadcast to everyone
        io.emit("recieve-location",{id:socket.id,...data});
       
    });
    
    socket.on("disconnect",()=>{
        delete users[socket.id]; // remove from storage
        io.emit("user-disconnected",socket.id)
        console.log("User disconnected",socket.id)
    })
})



app.get("/",(req,res)=>{
    res.render("index");
})







server.listen(port,()=>{
   console.log( `Server is running on ${port}`)
})