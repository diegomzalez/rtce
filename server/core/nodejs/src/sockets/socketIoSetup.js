// JavaScript component file for Sockets to setup and configure
// sockets behavior and events.

// Import required modules.
const socketIo = require("socket.io");
const cors = require("cors");

// Function to setup and configure a socket.io instance
// for the given HTTP instance and logic for this server/
// application.
module.exports = function socketIoSetup(httpInstance) {
  const socket = socketIo(httpInstance, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  socket.on("connection", (socket) => {
    console.log("New client connected.");
  });
};
