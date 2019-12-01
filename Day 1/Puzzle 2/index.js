const fs = require("fs");

const calculateRequiredFuel = mass => {
  return calculateFuel(mass);
};

calculateFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const calculateAdditionalFuel = requiredFuel => {
  let amount = 0;
  let patch = calculateFuel(requiredFuel);
  while (patch > 0) {
    amount += patch;
    patch = calculateFuel(patch);
  }
  return amount;
};

calculateTotalFuel = mass => {
  const requiredFuel = calculateRequiredFuel(mass);
  return requiredFuel + calculateAdditionalFuel(requiredFuel);
};

fs.readFile("./input", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  let total = 0;
  data.split("\n").forEach(line => {
    if (line) {
      total += calculateTotalFuel(line);
    }
  });
  console.log(total);
});
