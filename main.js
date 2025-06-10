const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
 
    height: 800,
    width: 1040,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    autoHideMenuBar: false,
    frame: true,
    backgroundColor: '#ffffff',
    transparent: false,
    minimizable: true,
    maximizable: false,
    fullscreenable: false,
    closable: true,
    resizable: false,
  });

  mainWindow.setTitle("IDI DEV TOOLS");
  mainWindow.setMenu(null);
  mainWindow.loadFile(path.join(app.getAppPath(), 'dist/index.html'));
  mainWindow.webContents.openDevTools({ mode: 'detach' });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
}); 