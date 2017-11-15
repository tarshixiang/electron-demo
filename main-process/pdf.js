const { BrowserWindow, ipcMain, shell } = require('electron');

const path = require('path');
const fs = require('fs');
const os = require('os');

// 打印pdf
// did-finish-load 在加载完之后在渲染
// const win = BrowserWindow.getFocusedWindow(); 有问题的win 对象 拿不到

function printToPdf(win){
  const pdfPath = path.join(os.tmpdir(), 'myapp.pdf');
  win.webContents.on('did-finish-load', () => {
    
    win.webContents.printToPDF({}, (err, data) => {
      if (err) console.error(err);
    
      fs.writeFile(pdfPath, data, (error) => {
        if(err) console.error(err);
        shell.openExternal('file://' + pdfPath) ;
      })
    })
  })
}


module.exports = {
  pdf: printToPdf
}