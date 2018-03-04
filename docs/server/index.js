import extendRequire from 'isomorphic-loader/lib/extend-require';

extendRequire({
  webpackDev: {
    url: '',
    addUrl: false,
  },
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    require('./server');
  }
});

/*
// If Promise is supported:

extendRequire().then(function () {
    require("./server");
}).catch(function (err) {
    console.log(err);
});

*/
