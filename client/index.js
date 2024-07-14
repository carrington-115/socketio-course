const socket = io("http://localhost:5000");

socket.on("connect", (response) => {
  console.log(response);
});
