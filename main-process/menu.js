//菜单栏调用
const { Menu, app, ipcMain, BrowserWindow } = require('electron');
let template = [
  {
    label: 'one',
    submenu: [
      {
        label: 'two'
      },
      {
        type: 'separator'//分隔符
      },
      {
        label: 'haha',
        click: () => {
          console.log('Click haha');
        }
      }
    ]
  },
  {
    label: 'tt',
    submenu: [
      {
        label: 'mmmm'
      }
    ]
  }
]

let menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);

app.dock.setMenu(menu); //桌面应用右键

ipcMain.on('show-context-menu', (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  menu.popup(win);
})// 页面右键 按钮点击 