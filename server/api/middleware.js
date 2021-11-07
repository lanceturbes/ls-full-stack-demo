const logger = (req, res, next) => {
  const time = new Date().now();
  const message = `
    | REQUEST RECEIVED
    |--------------------
    |   METHOD: ${req.method}
    | ENDPOINT: ${req.originalUrl}
    |     TIME: ${time}
    `;
  console.log(message);
  next();
};

const handleError = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "oh d-d-d-dear!"
  });
};

module.exports = { logger, handleError };
