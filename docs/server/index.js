const express = require('express')
const fs = require('fs')
const path = require('path');


const cwd = process.cwd();
const PORT = process.env.PORT || 3333;
const app = express()

const assetTarget = path.join(process.cwd(), 'public');
console.log('assetTarget', assetTarget)
app.use('/public', express.static(assetTarget))

app.get('/app.js', function (req, res) {
  res.sendFile(`${cwd}/dist/app.js`)
})

app.get('/*', function (req, res) {
  res.sendFile(`${cwd}/index.html`)
})

// start the server in the port 3000 !
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
