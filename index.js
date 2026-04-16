import express from "express";
import data from "./data/mock.json" with { type: "json" };

const app = express();

const PORT = 3000; 

app.get('/', (req, res) => {
    res.json(data); 
});

app.post('/create', (req, res) => {
    res.send('This is a POST request at /create');
});

app.put('/edit', (req, res) => {
    res.send('This is a PUT request at /');
});
app.delete('/delete', (req, res) => {
    res.send('This is a DELETE request at /');
});
app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
    console.log(data);
})
