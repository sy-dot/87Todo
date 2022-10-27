const $ = require('jquery');
const {remote} = require('electron');

const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

//// MINIMIZE APP
minimizeBtn.addEventListener('click', ()=> {
  ipc.send('minimizeApp')
})

//// MAXIMIZE RESTORE APP
// maximizeBtn.addEventListener('click', ()=> {
//   ipc.send('maximizeRestoreApp')
// })

//// CLOSE APP
closeBtn.addEventListener('click', ()=> {
  ipc.send('closeApp')
})





// const $ = require('jquery');
// const {remote} = require('electron');
// var win = remote.getCurrentWindow();

// $('#minimize').click(function(){
//   win.minimize();
// });

// $('#close').click(function(){
//   win.close();
// });

// $('#maximize').click(function() {
//   if(win.isMaximized()){
//       win.unmaximize();
//   }else{
//       win.maximize();
//   }
//   console.log(win.isMaximized());
// });
