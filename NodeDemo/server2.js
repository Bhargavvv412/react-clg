import http from "http";
const port = 4000;

http.createServer((req, res) => {

    if (req.url == "/home") {
        res.write("<h1>Home Page </h1>");
        res.end()
    } else if (req.url == "/about") {
        res.write(JSON.stringify({ 'flag': 1, 'msg': 'Record added' }));
        res.end();
    } else {
        res.write("welcome to website");
        res.end();
    }

}).listen(port);

console.log(`server is running on http://localhost:${port}/`);