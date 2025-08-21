const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello');
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/home.html");
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})