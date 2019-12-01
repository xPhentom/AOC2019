const fs = require("fs");

let total = 0;

const calculateRequiredFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

fs.readFile("./input", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  data.split("\n").forEach(line => {
    if (line) {
      total += calculateRequiredFuel(line);
    }
  });
  console.log(total);
});
