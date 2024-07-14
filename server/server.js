require("dotenv").config({ path: "./.env" });
const { createServer } = require("http");
const { Server } = require("socket.io");
const server = createServer();
const socket = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});
socket.on("connection", (socket) => {
  // console.log(socket);
  socket.on("message", (data) => console.log(data));
  socket.emit("message", "hello world");
});

server.listen(process.env.PORT, () =>
  console.log(`The server is running on ${process.env.PORT}`)
);
