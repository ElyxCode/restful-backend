module.exports = (err, req, res, next) => {
  const httpStatus = err.Status || 500;
  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || "Internal server error",
  });
};
