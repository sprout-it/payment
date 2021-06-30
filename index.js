
// const dev = process.env.NEXT_PUBLIC_NODE_ENV == true ? true : false;
const next = require('next')({ dev })
const handle = next.getRequestHandler()
const app = require('express')();
const expressWs = require('express-ws')(app);

next.prepare().then(() => {
    expressWs.app.ws('/wait', function (ws, req) {
        ws.on('open', function (msg) {
            console.log('open')
        });
        ws.on('message', function (msg) {
            console.log('msg')
        });
        ws.onmessage(message => console.log(message))
    });
    expressWs.app.get('/confirm', (req, res) => {
        expressWs.getWss('/wait').clients.forEach(client => {
            client.send('confirm')
        })
        res.send('ok')
    })
    expressWs.app.all('*', handle)
    expressWs.app.listen(3000, () => console.log('server listen on 3000'))
    // app.listen(3000, () => console.log('server listen on 3000'))
})