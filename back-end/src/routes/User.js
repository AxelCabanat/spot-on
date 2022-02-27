const router = require("express").Router();
const UserModel = require("../models/user");

/**
 * Returns the whole user list
 */
router.get("/", async (req, res) => {
  res.send(await UserModel.findAll());
});

/**
 * Register
 */
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await UserModel.createUser(username, email, password);
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

/**
 * Update info user
 */
router.put("/update/:id", async (req, res) => {
  const avatar = req.files?.avatar;

  try {
    const user = await UserModel.findOne(req.body?.id);

    const newUser = {
      ...user,
      ...req.body,
    };

    newUser.avatar = user.avatar;

    if (avatar) {
      uploadPathAvatar = __dirname + "/../../uploads/avatar/" + avatar.name;

      // On utilise la fonction mv (mise part express-fileupload)
      // pour déplacer le fichier uploadé dans le répertoire voulu
      avatar.mv(uploadPathAvatar, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });

      newUser.avatar = avatar.name;
    }

    await UserModel.updateUser(
      newUser.username,
      newUser.email,
      newUser.avatar,
      newUser.firstname,
      newUser.lastname,
      newUser.adresse,
      newUser.postal_code,
      newUser.city,
      newUser.country,
      newUser.phone,
      newUser.id
    );

    const senduser = await UserModel.findOne(newUser.id);
    res.status(200).send(senduser);
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
 * set user by cookies
 */
router.get("/me", (req, res) => {
  try {
    res.send(req.session.user);
  } catch (e) {
    res.status(401).send("unauthorized");
  }
});

/**
 * destroy user cookies
 */
router.get("/logout", (req, res) => {
  try {
    req.session.destroy(null);
    res.send("ok");
  } catch (e) {
    res.status(401).send("unauthorized");
  }
});

module.exports = router;
