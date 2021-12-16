const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const studentRoutes = require('./routes/student');
const mongoose = require('mongoose');

const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority");

app.use(indexRoutes);
app.use("/student", studentRoutes);

app.listen(port, function(req, res) {
    console.log('listening on port 3000')
})
