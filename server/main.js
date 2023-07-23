const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');

const cors = require("cors")

const PORT = Number(process.env.PORT) || 8080;
app.use(cors())
app.use(bodyParser.json())


app.get('/api/health', (req, res) => {
    res.sendStatus(200)
})

app.use(express.static(path.join(__dirname, "client-build")));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "client-build", "index.html"));
});


app.post("/api/get-answer", (req, res) => {
    console.log(req.body);
    res.send("i do :)")
})


server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});

