const express = require('express')
const fs = require('fs')
const path = require('path');


const cwd = process.cwd();
const PORT = process.env.PORT || 3333;
const app = express()

const assetTarget = path.join(process.cwd(), 'public');
app.use('/public', express.static(assetTarget))

// let's encrypt verif file
app.get('/.well-known/acme-challenge/nUlrYCwuJLq2elQmM_BIQH8JZxPay2M62UCSNqSWWGE', function (req, res) {
  res.send(`nUlrYCwuJLq2elQmM_BIQH8JZxPay2M62UCSNqSWWGE.1i_usMSyX762w21vp30VgBzAhlLFl_VweWHM61bQAJc`)
})

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
