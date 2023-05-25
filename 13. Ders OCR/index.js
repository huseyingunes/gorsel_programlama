const { app, BrowserWindow } = require('electron')

const path = require("path")
const url = require("url")

let win

const createWindow = () => {
    win = new BrowserWindow({
      width: 1200,
      height: 700,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    })
  
    //win.loadFile('veritabani.html')
    win.loadURL(url.format({
      pathname: path.join(__dirname, "dosya_yukle.html"),
      protocol:'file',
      slashes: true
    }))

    win.webContents.openDevTools();
  }

  app.whenReady().then(() => {
    createWindow()
  })