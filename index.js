const http = require('http');

let server = http.createServer((req, res) => {

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch(req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>RODANDO</h1>');
            break;

        case '/users': 
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({
                users: [{
                    name: 'juan',
                    email: 'contato@getHeapCodeStatistics.com.br',
                    id: 1
                }]
            }));
            break; 
          
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Página não encontrada');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando em http://127.0.0.1:3000');
});
