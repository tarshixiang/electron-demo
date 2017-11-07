const click = document.querySelector('#click');
const path = require('path');
const BrowserWindow = require('electron').remote.BrowserWindow;

let win;

click.onclick = () => {
  // window.open('http://test.rjkaifa.com/office/index.php');
  win = new BrowserWindow({
    width: 300,
    height: 200,
    frame: true,
  });


  win.on('close', () => {
    win == null
  });

  console.dir(win);
  win.loadURL(path.join('file:', __dirname, '../modal.html'));


}