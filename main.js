require('dotenv').config();
console.log("API Key di main process:", process.env.WEATHER_API_KEY);
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  
  });
  console.log("API Key di preload:", process.env.WEATHER_API_KEY);


  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});
