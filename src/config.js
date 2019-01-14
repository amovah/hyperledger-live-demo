const config = {
  prodCDN: '',
  devCDN: `http://localhost:${process.env.NODE_PORT}/static`,
  server: 'http://66.70.130.225:8080/api/blockAndTxList/1b6b205c6bfa19878a08118392de814a2a1a1df67339a05d0a31b845eb8937a7/0?', // eslint-disable-line
  proxy: 'http://localhost:3015/',
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = config.devCDN;
} else {
  config.cdn = config.prodCDN;
}

module.exports = config;
