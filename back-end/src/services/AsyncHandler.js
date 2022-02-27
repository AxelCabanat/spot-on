/**
 * Handler to handle errors in async routes
 * Call next automatically when the given handler fail.
 */
const asyncHandler = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = asyncHandler;
