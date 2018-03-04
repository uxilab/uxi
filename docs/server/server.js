import express from 'express'
import fs from 'fs'
import path from 'path'
import AppRootSSR from '../src/AppRootSSR'

const cacheTime = 86400000 * 7; // 7 days

const cwd = process.cwd();
const PORT = process.env.PORT || 3333;
const app = express()

app.use('/assets', express.static('dist', { maxAge: cacheTime }));
app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use('/favicon.png', express.static('images/favicon.png', { maxAge: 604800 }));

// app.get('/app.js', function (req, res) {
//   res.sendFile(`${cwd}/dist/app.js`)
// })

app.get('/*', function (req, res) {
  res.sendFile(`${cwd}/index.html`)
})

// start the server in the port 3000 !
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
