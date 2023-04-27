// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, MenuItem, globalShortcut, Tray, nativeImage, Notification } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
    }
  })

  mainWindow.webContents.openDevTools()

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}


const menu = new Menu()
menu.append(new MenuItem({
  label: 'Electron',
  submenu: [{
    role: 'help',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
    click: () => { console.log('Electron rocks!') }
  }]
}))

Menu.setApplicationMenu(menu)

const contextMenu = Menu.buildFromTemplate([
  { label: 'Secenek 1', type: 'radio' },
  { label: 'Secenek 2', type: 'radio' },
  { label: 'Secenek 3', type: 'radio', checked: true },
  { label: 'Secenek 4', type: 'radio' }
])

const NOTIFICATION_TITLE = "Temel Bildirim";
const NOTIFICATION_BODY = "Ana surecten bildirim geldi";


let tray

app.whenReady().then(() => {
  createWindow()

  globalShortcut.register('Alt+CommandOrControl+A', () => {
    new Notification({
      title: NOTIFICATION_TITLE,
      body: NOTIFICATION_BODY,
    }).show();
  })

  const icon = nativeImage.createFromPath('simge.png')
  tray = new Tray(icon)
  tray.setContextMenu(contextMenu)

  tray.setToolTip('Bizim uygulama')
  tray.setTitle('Bu da basligi')

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.