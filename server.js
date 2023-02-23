const http = require('http');
require('dotenv').config();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`
        <h1>Hello Zeno!</h1>
        <p>${process.env.USER_ID}</p>
        <p>${process.env.USER_KEY}</p>
        <p>${process.env.NODE_ENV}</p>
        <p>I see you</p>
    `);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})