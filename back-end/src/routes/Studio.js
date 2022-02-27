const router = require("express").Router();
const StudioModel = require("../models/studio.js");
const asyncHandler = require("../services/AsyncHandler");

/**
 * Returns the whole studio list
 */
router.get("/", async (req, res) => {
  res.send(await StudioModel.findAll());
});

/**
 * return one studio with name
 */
router.get("/:studio", async (req, res) => {
  const { studio } = req.params;
  res.send(await StudioModel.findOne(studio));
});

/**
 * return one studio with id
 */
router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await StudioModel.findOneById(id));
});

/**
 * create studio
 */
router.post("/", async (req, res) => {
  const { name, username } = req.body;
  res.send(await StudioModel.createStudio(name, username));
});

/**
 * Register
 */
router.post("/register", async (req, res) => {
  const { username, email, password, avatar } = req.body;

  try {
    await StudioModel.createAdminUser(username, email, password, avatar);
    res.status(201).send("created");
  } catch (e) {
    if (e.meta) {
      res.status(400).send(e.meta.message);
    } else if (e.sqlMessage) {
      res.status(400).send([{ message: e.sqlMessage }]);
    } else {
      console.log(e);
      res.status(500).send("Unexpected error");
    }
  }
});

/**
 * Register
 */
router.put("/update/:id", async (req, res) => {
  const {
    logo,
    name,
    banner,
    background,
    background2,
    background_secondary,
    color_primary,
    color_secondary,
    typo,
    main_title,
    main_description,
    title1,
    description1,
    url1,
    title2,
    description2,
    url2,
    title3,
    description3,
    url3,
    title4,
    description4,
    url4,
    title5,
    description5,
    url5,
  } = req.body;

  const { id } = req.params;

  try {
    res
      .status(201)
      .send(
        await StudioModel.updateStudioAll(
          logo,
          name,
          banner,
          background,
          background2,
          background_secondary,
          color_primary,
          color_secondary,
          typo,
          main_title,
          main_description,
          title1,
          description1,
          url1,
          title2,
          description2,
          url2,
          title3,
          description3,
          url3,
          title4,
          description4,
          url4,
          title5,
          description5,
          url5,
          id
        )
      );
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

router.put(
  "/:id/live",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { is_on_stream, stream_url } = req.body;
    res
      .status(201)
      .send(await StudioModel.streamLaunch(id, is_on_stream, stream_url));
  })
);

module.exports = router;
