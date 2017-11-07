const { Menu, Tray } = require('electron');
const path = require('path');
let appIcon = null;
// 菜单栏图标
appIcon = new Tray(path.join(__dirname, './icon/icon.png'));

const menu = Menu.buildFromTemplate([{
  label: '关闭',
  click: () => {
      appIcon.destory();
      console.log('click');
  }
}])

appIcon.setToolTip('my love ')

appIcon.setContextMenu(menu);