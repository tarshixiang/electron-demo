const click = document.querySelector('#click');
const path = require('path');
const BrowserWindow = require('electron').remote.BrowserWindow;

let win;

click.onclick = () => {
  // window.open('http://test.rjkaifa.com/office/index.php');
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
  });


  win.on('close', () => {
    win == null
  });
  win.webContents.openDevTools()
  
  win.loadURL(path.join('file:', __dirname, '../xx.html'));


}