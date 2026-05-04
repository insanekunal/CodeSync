// test.js
const fetch = require("node-fetch");

fetch("https://emkc.org/api/v2/piston/execute", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    language: "python3",
    source: "print(123)"
  })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
