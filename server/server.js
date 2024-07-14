require("dotenv").config({ path: "./.env" });
const { createServer } = require("http");
const { Server } = require("socket.io");
const server = createServer();
const socket = new Server(server, {});
socket.on("connection", (socket) => {
  console.log(socket);
});

server.listen(process.env.PORT, () =>
  console.log(`The server is running on ${PORT}`)
);
