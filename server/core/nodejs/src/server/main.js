// JavaScript main file that initialize, configure and start
// rtce server.

// Import required modules.

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

function main() {
  // Initialize Express instance.
  const server = express();
  // Enable CORS.
  server.use(cors());
  // Initialize HTTP instance with Express instance.
  const httpInstance = http.createServer(server);
  // Initialize Socket.io instance with HTTP instance.
  const socketIoInstance = socketIoSetup(httpInstance);
}
