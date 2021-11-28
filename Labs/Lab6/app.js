let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000;


app.get("/", function(req, res) {
    var names = ["A", "B", "C", "D", "E", "F"]
    var number = getRandomInt(5);
    res.render("index", {name: names[number]});
});

app.post("/login", function(req, res) {
    console.log(req.body.login);
    res.redirect('/')
})

app.get("/signup", function(req, res) {
    res.render("signup")
})

app.post("/sign", function(req, res) {
    console.log(req.body.signup);
    res.redirect('/')
})

app.post("/ok", function(req, res){
    res.redirect("/signup")
})

app.post("/back", function(req, res){
    res.redirect('/')
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.listen(port, function() {
    console.log("Server running on localhost:3000");
});