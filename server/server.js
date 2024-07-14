require("dotenv").config({ path: "./.env" });
const { createServer } = require("http");

const server = createServer();

server.listen(process.env.PORT, () =>
  console.log(`The server is running on ${PORT}`)
);
