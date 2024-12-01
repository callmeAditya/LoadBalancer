const http = require('http');
const servers = require('./servers.json').servers
const roundrobin = require('./roundRobin');


const server = http.createServer((req,res)=>{
    roundrobin(servers,req, res);
})


server.listen(3000,()=>{
    console.log('Server listening at 3000');
    
})
