require('http').createServer((req, res)=>{
	let path = '/index.html'
		if (req.url!='/'){
			path = 	req.url;
			if(req.url.match('css'))
				res.writeHead(200, { 'Content-Type': 'text/css' });
			else 
				res.writeHead(200, { 'Content-Type': 'image/x-icon' });
		}else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
		}
	let fs = require('fs'), buffer = fs.readFileSync('./WebContent'+path);
	res.end(buffer);
}).listen(8888,(port,data)=>{
	console.log(data);
});