const express = require("express");
const app = express();
console.log("A");

app.get("/", (req, res) => {
  console.log("B");
  res.send("<h1>Hello</h1>");
});

app.get("/add", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.send("Sum: " + (a + b));
});

app.get("/slow", (req, res) => {
  console.log("C");
  return "done";
});

// home assignment

// Extend your webserver
// 1. Add 3 new routes

// return current date and time
app.get("/time", (req, res) => {
  const time = new Date();
  res.send(`${time}`);
});

// greeting
app.get("/hello", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).send(`Please send name`);
  }
  res.send(`Hello, ${name}!`);
});

//return JSON "about me"
const me = {
  name: "Stas",
  city: "Gammel Holte, Denmark",
  job: "Electrician",
  role: "Frontend developer",
  studying: "Backend at HackYourFuture",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  interests: ["Web development", "Cybersecurity", "Marketing"],
};

app.get("/about", (req, res) => {
  res.json(me);
});

// home assignment

app.listen(3000, () => {
  console.log("D: listening on 3000");
});
