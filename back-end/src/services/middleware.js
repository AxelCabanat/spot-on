const noStaticTestMiddleware = (req, res, next) => {
    // Si on tente d'accéder à un fichier contenant
    // le mot "test", on renvoie un 401
    if (req.path.match(/test/)) {
      return res.status(401).send('Forbidden');
    }
  
    next();
  }

  module.exports = {
    noStaticTestMiddleware
  };