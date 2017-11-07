const { shell } = require('electron');
//浏览器打开链接  修改默认href
// shell.openExternal('https://www.baidu.com');

const links = document.querySelectorAll('a[href]');

Array.from(links).forEach((link) => {
    const url = link.getAttribute('href');

    if(url.indexOf('http') == 0){
        link.onclick = (e) => {
            e.preventDefault();

            shell.openExternal(url);
        }
    }
}) 