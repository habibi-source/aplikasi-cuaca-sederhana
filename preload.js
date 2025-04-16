// preload.js
const { contextBridge } = require('electron');
// Ini akan mengekspos variabel lingkungan ke renderer process
contextBridge.exposeInMainWorld('env', {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY
});