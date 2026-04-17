import express from "express";
import data from "./data/mock.json" with { type: "json" };

const app = express();

const PORT = 3000; 

//GET
app.get('/', (req, res) => {
    res.json(data); 
});

//GET with next()
app.get('/next', (req, res, next) => {
    console.log("the response will be sent by the next function");
    next();
}, (req, res) => {
    res.send("I just set up a route with a second callback.")
});

//GET with routing parameters
app.get("/class/:id", (req, res) => {
    //Use the Number object to turn the student id to a number.
    const studentId = Number(req.params.id);

    //using filter, we will filter down to the student id 
    const student = data.filter((student) => student.id === studentId);
    res.send(student);
});

//GET - redirect methon
app.get('/redirect', (req, res) => {
    res.redirect("https://www.linkedin.com"); 
});

//route chaining
app.route("/class").get((req, res) => {
    res.send('Retrieve class info');
}).post((req, res) => {
    res.send('Create Class Info');
}).put((req, res) => {
    res.send('Update Class Info');
});

// app.post('/class', (req, res) => {
//     req.send('Create Class Info');
// });

// app.put('/edit', (req, res) => {
//     res.send('This is a PUT request at /');
// });
// app.delete('/delete', (req, res) => {
//     res.send('This is a DELETE request at /');
// });
app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
    //console.log(data);
})
