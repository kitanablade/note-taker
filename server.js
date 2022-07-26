const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
//middleware for find static assets
app.use(express.static("public"));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const allRoutes = require("./controllers")
// app.use(allRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
  });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./develop/public/404.html"));
})

app.listen(PORT, () => {
  console.log("listenin to port " + PORT);
});


