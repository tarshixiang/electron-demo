const { Menu, Tray } = require('electron');
const path = require('path');
let appIcon = null;
// 菜单栏图标
appIcon = new Tray(path.join(__dirname, './icon/icon.png'));
// path.join 不能添加file: 不然会报错
const menu = Menu.buildFromTemplate([{
  label: '关闭',
  click: () => {
      appIcon.destory();
      console.log('click');
  }
}])

appIcon.setToolTip('my love ');

appIcon.setContextMenu(menu);