#!/usr/bin/env node
const fs = require("fs");

fs.readFile("./cow.txt", "utf8", function (err, data) {
  if (err) process.exit(1);
  console.log(data);
  process.exit(0);
});
