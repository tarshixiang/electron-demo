const path = require('path');

const option = {
    title: 'title',
    body: 'body',
    icon: path.join('main-process/icon/icon.png') //不需要相对路径
}

const myNotification = new window.Notification(option.title, option);

myNotification.onclick = () => {
    console.log('clicked!');
}