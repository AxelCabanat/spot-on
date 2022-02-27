// Setup application port depending on environment variables
const port = process.env.PORT || 3001;

// Load .env file
require("dotenv").config();

const path = require("path");
const cors = require("cors");
const session = require("express-session");
const helmet = require("helmet");
const expressStaticGzip = require("express-static-gzip");
const fileUpload = require("express-fileupload");
const express = require("express");
const app = express();

const ErrorHandler = require("./services/ErrorHandler");
const setupApiRoutes = require("./routes");

// Add minimum security with helmet
// @see https://helmetjs.github.io

// TODO: Remettre en place quand https ready !!!

// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       "script-src": "*",
//       "frame-src": "*",
//       "img-src": "* data:",
//     },
//   })
// );

// Handle CORS requests on development environment
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}

// Handle sessions
app.use(
  session({
    name: "yoga_and_me",
    secret: "}wVnE<jZ2:EEt#[qMNptvF^67=jSEmm~",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Handle JSON post data
app.use(express.json());

// Gestion des uploads
app.use(fileUpload());

// Configure routes
setupApiRoutes(app);

// Add generic error handler
app.use(ErrorHandler);

// Permet d'exposer le dossier upload à l'internet
app.use("/static", express.static(path.join(__dirname, "..", "uploads")));

// Serve the static files from the React app
// Enable gzip and brotli compression (the last if available)
app.use(
  expressStaticGzip(path.join(__dirname, "..", "..", "front-end", "dist"), {
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

// Redirect all requests to index.html letting react-router making its job
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "front-end", "dist", "index.html")
  );
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Spoton is listenning on port ${port}`);
});
