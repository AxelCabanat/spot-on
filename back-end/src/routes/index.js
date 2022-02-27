const usersRouter = require("./User");
const surveyRouter = require("./Survey");
const studiosRouter = require("./Studio");
const videosRouter = require("./Video");

const setupRoutes = (app) => {
  // Home Page
  app.get("/api", (req, res) => {
    res.send("Welcome to WCS Express + REACT starter project");
  });

  // Users routes
  app.use("/api/users", usersRouter);

  // Questions routes
  app.use("/api/surveys", surveyRouter);
  
  //Studios route
  app.use("/api/studios", studiosRouter);

  //Videos route
  app.use("/api/videos", videosRouter);
};

module.exports = setupRoutes;
