import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/project", (req, res) => {
    res.render("project.ejs");
})

app.get("/companies", (req, res) => {
    res.render("company.ejs");
})

app.get("/flightdb", (req, res) => {
    res.render("flightdb.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})