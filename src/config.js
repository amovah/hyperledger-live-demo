const config = {
  prodCDN: '',
  devCDN: `http://localhost:${process.env.NODE_PORT}/static`,
  server: 'http://66.70.130.225:8080/api/',
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = config.devCDN;
} else {
  config.cdn = config.prodCDN;
}

module.exports = config;
