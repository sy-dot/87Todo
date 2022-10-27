const {app, BrowserWindow, ipcMain, shell} = require('electron');
const { getWindowSettings, savePosition} = require('./settings')

const path = require('path');
const url = require('url');
const ipc = ipcMain

let win;

function createWindow(){

  const winpos = getWindowSettings()
  
  win = new BrowserWindow({
    width: 600,
    height: 600,
    x: winpos[0],
    y: winpos[1],
    minWidth: 600,
    minHeight: 600,
    maxWidth: 600,
    maxHeight: 600,
    maximizable: false,
    fullscreen: false,
    fullscreenable: false,
    resizable: false,
    icon: __dirname+'/src/img/icon.png',
    frame: false,
    resizable: true,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.on('moved', () => savePosition(win.getPosition()))


  win.loadFile('index.html') // Загрузить файл при открытии
  win.setBackgroundColor('#1A202C') // Цвет фона окна приложения


  // Открытие линков _blank в браузере по умолчанию
  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });


  /////// КНОПКИ ТАЙТЛ бАРА
  //// МИНИМАЙЗ
  ipc.on('minimizeApp', ()=> {
    win.minimize()
  })

  //// ЗАКРЫТЬ
  ipc.on('closeApp', ()=> {
    win.close()
  })
  /////////////////////////


  //// ЗАКРЫТИЕ ОКОН (НЕ ОТНОСИТСЯ К КНОПКАМ)
  win.on('closed', () => {
    win = null;
  })
  
}


app.on('ready', createWindow);


// Если все окна закрыты - закрыть приложение, малое отношение к виндовс, но имеет к маку
app.on('window-all-closed', () =>{
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
