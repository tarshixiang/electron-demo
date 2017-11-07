const { BrowserWindow } = require('electron').remote;

const { ipcRenderer } = require('electron');

onload = () => {
  ipcRenderer.on('msg', (event, windId, msg) => {
    let win = BrowserWindow.fromId(windId);

    console.log(msg);

    win.webContents.send('back', windId, { name: 'tar', text: 'hello too'})
  
  })
  
}