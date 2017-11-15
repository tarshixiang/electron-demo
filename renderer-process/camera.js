navigator.webkitGetUserMedia({ video: true },
    function (stream) {
        document.getElementById('camera').src = URL.createObjectURL(stream);
        var filename = __dirname + '/qrcode.png'
        console.log(filename, stream)
        qrcode.decode(image)
        // var Canvas = require('canvas')
        //     , Image = Canvas.Image
        //     , qrcode = require('jsqrcode')(Canvas)
        // var filename = __dirname + '/qrcode.png'
        // var image = new Image()
        // image.onload = function () {
        //     var result;
        //     try {
        //         result = qrcode.decode(image);
        //         console.log('result of qr code: ' + result);
        //     } catch (e) {
        //         console.log('unable to read qr code');
        //     }
        // }
        // image.src = filename
    },
    function () {
        alert('could not connect stream');
    }
);
