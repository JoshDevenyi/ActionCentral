//IMPORT REQUIRED MODULES 
const express = require("express");
const path = require("path");

//Set up an Express Object
const app = express(); //app is holding the Express object
const port = process.env.PORT || "8888";

//Set up paths to important folders and/or files
app.set("views",path.join(__dirname, "views")); //Setting up were the views are found
app.set("view engine", "pug"); //Setting PUG as our view engine.

//CSS and Client-Side JS are static files
app.use(express.static(path.join(__dirname, "public")));

//Test Express to see if it's working
//a GET request on the root page ("/") is just a page load of the home page
//(req, res) => {} is the equivalent of function(req, res) {}

//PAGE ROUTES
app.get("/", (req, res) => {
    
    res.render("index", {title: "Home"});
    
});

app.get("/contact", (req, res) => {
    
    res.render("contact", {title: "Contact Us"});
    
});

app.get("/product", (req, res) => {
    
    res.render("product", {title: "Marvel's Spider-Man (Spider-Punk Suit) 1/6 Scale Collectible Figure"});
    
});

app.get("/comingsoon", (req, res) => {
    
    res.render("comingsoon", {title: "Coming Soon - Website Still a Work in Progress"});
    
});


//set up server listening
app.listen(port, () => {

    console.log(`Listening on http://localhost:${port}`)

});