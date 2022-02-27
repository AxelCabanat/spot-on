const router = require("express").Router();
const QuestionModel = require("../models/survey");

/**
 * Returns the whole user list
 */
router.get("/", async (req, res) => {
  res.send(await UserModel.findAll());
});

/**
 * Returns the whole user list
 */
 router.get("/survey", async (req, res) => {
  res.send(await UserModel.findAll());
});

/**
 * Register
 */
router.post("/register", async (req, res) => {
  const { username, email, password, avatar } = req.body;

  try {
    await UserModel.createUser(username, email, password, avatar);
    res.status(201).send("created");
  } catch (e) {
    if (e.meta) {
      res.status(400).send(e.meta.message);
    } else if (e.sqlMessage) {
      res.status(400).send([{ message: e.sqlMessage }]);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
});

/**
 * Login
 */
router.post("/login", async (req, res) => {
  const { username, clearPassword } = req.body;

  try {
    const user = await UserModel.findOneByUsername(username, clearPassword);

    if (user === "error 400") {
      return res.status(401).send("unauthorized");
    }
    const { password, ...userObject } = user;
    if (user) {
      req.session.user = userObject;
      return res.send(userObject);
    }
    res.status(403).send("Forbidden");
  } catch (e) {
    res.status(500).send("unexpected error");
  }
});

module.exports = router;
