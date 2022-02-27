const Errors = require("./Errors");

/**
 * Generic error handler. Handling basic app error and
 * dispatch related HTTP code
 */
const errorHandler = (error, req, res, next) => {
  if (error instanceof Errors.BadRequestError) {
    return res.status(400).send(error.message || "Bad request");
  }

  if (error instanceof Errors.UnauthorizedError) {
    return res.status(401).send(error.message || "Unauthorized");
  }

  if (error instanceof Errors.AccessDeniedError) {
    return res.status(403).send(error.message || "Access denied");
  }

  if (error instanceof Errors.NotFoundError) {
    return res.status(404).send(error.message || "Not found");
  }

  if (error instanceof Errors.ConflictError) {
    return res.status(409).send(error.message || "Conflict");
  }

  return res.status(500).send(error.message || "Internal server error");
};

module.exports = errorHandler;
