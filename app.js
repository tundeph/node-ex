// const names = require("./4-names");
// const sayHi = require("./5-utils");
// //sayHi(names.john);

// const { type, release, totalmem, freemem } = require("os");
// const { log } = require("console");
// const currentOs = {
//   name: type(),
//   release: release(),
//   totalMem: totalmem(),
//   freeMem: freemem(),
// };
// //console.log(currentOs);

// const lodash = require("lodash");

// const items = [1, [2, [3, [4]]]];
// const newItems = lodash.flattenDeep(items);
// console.log("This is the result: ", newItems);

//--------
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   //res.writeHead(200, { "content-type": "text/html" });

//   if (req.url === "/") {
//     res.end();
//   }
//   if (req.url === "/about") {
//     res.end("About Page");
//   }
// });

// server.listen(5004, () => {
//   console.log("Server listening on port 5004...");
// });

//--------

const express = require("express");
const app = express();

app.use(express.static("./frontend"));
app.use(express.urlencoded({ extended: false }));

let { people } = require("./content/subfolder/data");

app.get("/people", (req, res) => {
  res.status(200).send({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send("Please provide credentials");
});

app.listen("5004", () => {
  console.log("Server is listening on port 5004...");
});
