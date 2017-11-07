const { ipcMain } = require('electron');

ipcMain.on('msg-a', (event) => {
  event.returnValue = 'Hello msg-a';
})
//主进程与 渲染进程 同步通信

ipcMain.on('msg-a-1', (event ,args) => {
  console.log(args.name)
  
  event.sender.send('msg-a-1-back', { name: 'sx' });
  
})