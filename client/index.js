const socket = io("http://localhost:5000");

socket.on("connect", (response) => {
  console.log(response);
});

socket.on("message", (data) => {
  console.log(data);
});

socket.emit("message", "hi server");
