const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');
const data = require('./urls.json');

function writeFile(cb) {
    const pathFile = path.join(__dirname, 'urls.json');
    fs.writeFile(
        pathFile,
        JSON.stringify(data, null, 2),
        (err) => {
            if(err) throw err;
            cb(JSON.stringify({message:"ok"}))
        }
    )
}

function addUrl(name, url, cb){
    data.urls.push({name, url})
    return writeFile(cb);
}

function deleteUrl(url, cb){
    data.urls = data.urls.filter(item => String(item.url) !== String(url));
    return writeFile(cb);
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    });

    const { name, url, del } = URL.parse(req.url, true).query;

    if(del) {
        return deleteUrl(url, (message)=> {res.end(message)})
    }

    if(name || url){
        return addUrl(name, url, (message)=> {res.end(message)})
    }

    return res.end(JSON.stringify(data, null, 2))

}).listen(3000, () => console.log('Server is running'))

