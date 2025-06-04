// const fs = require("fs");

// console.log("first");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log("File Contents");
// });

// console.log("last");

// const crypto = require("crypto");

// const start = Date.now();
// // crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// // console.log("Hash: ", Date.now() - start);

// // process.env.UV_THREADPOOL_SIZE = 6;
// const MAX_CALLS = 5;

// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }

const https = require("https");

const start = Date.now();
const MAX_CALLS = 5;

for (let i = 0; i < MAX_CALLS; i++) {
  const req = https.request("https://www.google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(`Request: ${i + 1}`, Date.now() - start);
    });
  });

  // Handle request errors
  req.on("error", (err) => {
    console.error(`Request ${i + 1} failed:`, err.message);
  });

  // Important: End the request
  req.end();
}
