/**
 * Used to dispatch 403 response code
 */
 class AccessDeniedError extends Error {}

 /**
  * Used to dispatch 401 response code
  */
 class UnauthorizedError extends Error {}
 
 /**
  * Used to dispatch 404 response code
  */
 class NotFoundError extends Error {}
 
 /**
  * Used to dispatch 400 response code
  */
 class BadRequestError extends Error {}
 
 /**
  * Used to dispatch 409 response code
  */
  class ConflictError extends Error {}
 
 /**
  * Used to dispatch 500 response code
  */
 class UnexpectedError extends Error {}
 
 module.exports = {
   AccessDeniedError,
   BadRequestError,
   ConflictError,
   NotFoundError,
   UnexpectedError,
   UnauthorizedError,
 };
 