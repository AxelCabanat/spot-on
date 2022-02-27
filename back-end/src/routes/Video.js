const router = require("express").Router();
const VideoModel = require("../models/video");

router.post("/uploads", async (req, res) => {
  const { title, id, category } = req.body;
  const video = req.files.video;
  const miniature = req.files.miniature;
  try {
    // On va créer un nouveau fichier dans le dossier upload
    // avec comme contenu le fichier reçu par POST et comme nom
    // "title"
    uploadPathVideo = __dirname + "/../../uploads/videos/" + video.name;
    uploadPathMiniature =
      __dirname + "/../../uploads/miniatures/" + miniature.name;

    // On utilise la fonction mv (mise part express-fileupload)
    // pour déplacer le fichier uploadé dans le répertoire voulu
    video.mv(uploadPathVideo, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    miniature.mv(uploadPathMiniature, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    await VideoModel.createVideo(
      title,
      video.name,
      id,
      category,
      miniature.name
    );

    res.send("FILE UPLOADED");
  } catch (e) {
    console.log(e);
    if (e.meta) {
      res.status(400).send(e.meta.message);
    } else if (e.sqlMessage) {
      res.status(400).send([{ message: e.sqlMessage }]);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
});

router.put("/update", async (req, res) => {
  const miniature = req.files?.miniature;

  try {
    const video = await VideoModel.findVideo(req.body?.id);

    // Merge existing video with the posted data
    const newVideo = {
      ...video,
      ...req.body,
    };

    if (miniature) {
      // On va créer un nouveau fichier dans le dossier upload
      // avec comme contenu le fichier reçu par POST et comme nom
      // "title"
      uploadPathMiniature =
        __dirname + "/../../uploads/miniatures/" + miniature.name;

      // On utilise la fonction mv (mise part express-fileupload)
      // pour déplacer le fichier uploadé dans le répertoire voulu

      miniature.mv(uploadPathMiniature, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });

      newVideo.url_miniature = miniature.name;
    }

    await VideoModel.updateVideo(
      newVideo.title,
      newVideo.id_studio,
      newVideo.category_id,
      newVideo.url_miniature,
      newVideo.id
    );

    res.send("FILE UPDATE");
  } catch (e) {
    console.log(e);
    if (e.meta) {
      res.status(400).send(e.meta.message);
    } else if (e.sqlMessage) {
      res.status(400).send([{ message: e.sqlMessage }]);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
});

router.get("/studio/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await VideoModel.findAllByStudio(id));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await VideoModel.findVideo(id));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await VideoModel.deleteVideo(id);
  res.send("Deleted");
});

router.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await VideoModel.findAllCategoriesByStudio(id));
});

router.post("/categories", async (req, res) => {
  const { label, id_studio } = req.body;
  res.send(await VideoModel.creatCategory(label, id_studio));
});

module.exports = router;
