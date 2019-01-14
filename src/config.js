const config = {
  prodCDN: '',
  devCDN: `http://localhost:${process.env.NODE_PORT}/static`,
  server: 'http://localhost:3015/',
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = config.devCDN;
} else {
  config.cdn = config.prodCDN;
}

module.exports = config;
