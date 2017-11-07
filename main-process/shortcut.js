const { app, globalShortcut, dialog } = require('electron');

app.on('ready', () => {
    globalShortcut.register('Cmd+Y', () => {

        dialog.showMessageBox({
            message: '快捷键cmd + y',
            info: 'info',
            detail: '已经触发',
            button: ['ok']
        })

    })
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
})