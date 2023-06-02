const { app, BrowserWindow } = require('electron')
const path = require('path')

var http = require('http');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var server_app = express();

// Add a simple route for static content served from 'public'
server_app.use("/", express.static("public"));

// Create a server
var server = http.createServer(server_app);

// Create the settings object - see default settings.js file for other options
var settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: __dirname + "/.nodered/",
  functionGlobalContext: {}    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /red
server_app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
server_app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8000);

// Start the runtime
var promise = RED.start();

async function createWindow() {
  await promise;
  const win = new BrowserWindow({
    width: 1200,
    height: 800
  })

  win.loadURL(`http://localhost:8000/red`);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    await RED.stop();
    app.quit()
  }
})
