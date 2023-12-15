const http = require('http');

// This is a service for our web application
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!!');
        res.end();
    }

    if (req.url === '/api/movies') {
        res.write(JSON.stringify(['Michael', 'Peter', 'Femi']));
        res.end();
    }
    
});

server.listen(3000);
console.log('Listening on port 3000...');