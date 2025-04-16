// preload.js
const { contextBridge } = require('electron');
console.log("API Key di preload:", process.env.WEATHER_API_KEY);
// Ini akan mengekspos variabel lingkungan ke renderer process
contextBridge.exposeInMainWorld('env', {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY
});