//middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const yr = new Date().getFullYear();
  console.log(method, url, yr);
  next();
};

module.exports = logger;
