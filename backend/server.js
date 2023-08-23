const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyparser = require("body-parser");
const http = require("http");
const addUser = require("./config/user");
const removeUser = require("./config/user");
const getUser = require("./config/user");
const getUsersOfRoom = require("./config/user");
const { Server } = require("socket.io");
const router = require("./router");

const app = express();
connectDB();

app.use(router);
app.use(cors());
const server = http.createServer(app);
app.use(bodyparser.json());
const io = new Server(server, {
  cors: {
    origin: true,
    credintials: true,
  },
});

io.on("connection", (socket) => {
  console.log("======>socket " + socket.toString());
  socket.on("join", ({ name, room }, callback) => {
    console.log("======>new " + name);
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    //admin generated messages are called 'message'
    //welcome message for user
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });

    //message to all the users of that room except the newly joined user
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersOfRoom(user.room),
    });

    callback();
  });

  //user generated message are called 'sendMessage'
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersOfRoom(user.room),
    });

    callback();
  });

  socket.on("disconnected", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

app.use("/api/auth", require("./routes/api/auth"));
