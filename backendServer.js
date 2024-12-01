const http = require('http');
const servers = require('./servers.json').servers

const createServer = (host, port, status)=>{
    http.createServer((req,res)=>{
        res.writeHead(200);
        res.end(`Server response came from port ${port}\n`);
    }).listen(port,host,()=>{
        console.log(`Server listening at http://${host}:${port} with status: ${status}`);
        
    })
}

servers.forEach(({host,port, status})=>{
    createServer(host,port, status);
})
