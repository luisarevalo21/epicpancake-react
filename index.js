const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'
app.get("/", (req, res) => {
  console.log("hello world");
});
//   const count = 5;

//   // Generate some passwords
//   const passwords = Array.from(Array(count).keys()).map(i =>
//     generatePassword(12, false)
//   )

//   // Return them as json
//   res.json(passwords);

//   console.log(`Sent ${count} passwords`);
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.get("/ex", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
// app.get("/", (req, res) => {
//   console.log("hello world");

//   // res.sendFile(path.join(__dirname + "/client/index.html"));
// });

// app.get("*", (req, res) => {
//   let url = path.join(__dirname, "../client/build", "index.html");
//   if (!url.startsWith("/app/"))
//     // since we're on local windows
//     url = url.substring(1);
//   res.sendFile(url);
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Epicpancake ${port}`);
