require('http').createServer((req, res)=>{
	let fs = require('fs'), buffer = fs.readFileSync('./WebContent/index.html');
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(buffer);
}).listen(8888,(port,data)=>{
	console.log(data);
});