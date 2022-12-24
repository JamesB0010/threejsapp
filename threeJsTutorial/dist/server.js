import express from 'express';

const app = express();

app.use(express.static("."));
app.use(express.static('./assets'));

app.listen(3000, () =>
console.log("App listening on port 3000")
);

app.get('/', (req, res) => {
    res.sendFile("./index.html");
});

//Open a new terminal session
//use cd to change directory to "C:\Users\james\OneDrive\Documents\Web stuff\Three Js mess around\Git 2\threejsmoontut\dist"
//type node server.js
//open a web browser and enter localhost:3000 into the url bar
//and you can see the website in action