const electron = require('electron')
const path = require('path')


const app = electron.app
const BrowserWindow = electron.BrowserWindow


let win
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    show: true,
  })

  win.loadURL(`file://${__dirname}/build/index.html`)
  win.openDevTools()
}

app.on('ready', () => {
  createWindow()
})



