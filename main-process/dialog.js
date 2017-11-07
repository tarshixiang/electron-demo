const { dialog } = require('electron');

dialog.showErrorBox('title', 'content');
//警告框


dialog.showMessageBox({
    type: 'info',
    title: 'message',
    message: 'hello',
    buttons: [ '好的', '错的']
}, (index) => {
    if(index ==0 ){
        console.log('click ok btn');
    }else{
        console.log('click err btn');
    }
})
//弹出框 

dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory']
}, (files) => {
    console.log(files)
})
//读取打开都文件 文件夹地址

dialog.showSaveDialog({
    title: 'save something',
    filters: [
        { name: 'some', extensions: ['js']}//格式扩展
    ]
}, (filename) => {
    console.log(filename)
})
// 存一些文件