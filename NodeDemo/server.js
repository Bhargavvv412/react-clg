import http from "http";
var a = 10
var b = 20
var c = a + b
const port = 4000

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Sum Calculation</h1>')
    res.end(`The sum of ${a} and ${b} is ${c}`)

}).listen(port)

console.log(`Server running at http://localhost:${port}/`)