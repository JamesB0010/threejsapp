import express from 'express';

const app = express();

app.use(express.static(".."));

app.listen(3000, () =>
console.log("App listening on port 3000")
);

app.get('/', (req, res) => {
    res.sendFile("../index.html");
});