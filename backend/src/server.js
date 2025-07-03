import dotenv from "dotenv"
import connectDB from "./config/db.config.js";
import {app} from "./app.js"
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config({
    path: './.env'
})

const server = createServer(app);

// Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});

app.set('io', io);

// Store io globally if needed (optional)
// global.io = io;

io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});


connectDB()
.then(() => {
    //we are listening error for an event. i.e; listening after db connection and before server listening
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;  
    })
    /*app.listen(process.env.PORT || 9000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })*/
    server.listen(process.env.PORT || 9000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    app.on("error", (error) => {
        console.log('your port is not free')
    })
})
.catch((err) => {+
    console.log("MONGO db connection failed !!!" , err);
})