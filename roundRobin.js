const httpproxy = require('http-proxy');

const proxy = httpproxy.createProxyServer({});

let current = 0;

const roundrobin = (servers, req, res)=>{
    const target = servers[current];

    current=(current+1)%servers.length;

    if(target.status === 200){
    proxy.web(req,res,{target: `http://${target.host}:${target.port}`});}
}


module.exports = roundrobin;