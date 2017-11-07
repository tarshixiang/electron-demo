const { ipcRenderer } = require('electron');

const btn = document.querySelector('#msg_a');

btn.onclick = () => {
  const msg = ipcRenderer.sendSync('msg-a');
  console.log(msg, '同步通信' )
  // 同步通信

  ipcRenderer.send('msg-a-1', { name: 'tar' });

  ipcRenderer.on('msg-a-1-back', function(event, args){
    console.log(args.name, '异步通信')

  })
}

