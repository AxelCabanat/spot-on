const db = require("../services/Db");

const createVideo = async (
  title,
  url_video,
  id_studio,
  category_id,
  url_miniature
) => {
  await db.$queryRaw`INSERT INTO videos (title, url_video, id_studio, category_id, url_miniature) VALUES (${title}, ${url_video}, ${id_studio}, ${category_id}, ${url_miniature})`;
};

const updateVideo = async (
  title,
  id_studio,
  category_id,
  url_miniature,
  id
) => {
  await db.$queryRaw`UPDATE videos SET title = ${title}, id_studio = ${id_studio}, category_id = ${category_id}, url_miniature = ${url_miniature} WHERE id = ${id} `;
};

const findAllByStudio = async (id) => {
  const videos =
    await db.$queryRaw`SELECT * FROM videos WHERE id_studio = ${id}`;
  return videos;
};

const findVideo = async (id) => {
  const video = await db.$queryRaw`SELECT * FROM videos WHERE id = ${id}`;
  return video[0];
};

const deleteVideo = async (id) => {
  await db.$queryRaw`DELETE FROM videos WHERE id = ${id}`;
};

const findAllCategoriesByStudio = async (id) => {
  const categories =
    await db.$queryRaw`SELECT * FROM categories WHERE id_studio = ${id}`;
  return categories;
};

const creatCategory = async (label, id_studio) => {
  const categories =
    await db.$queryRaw`INSERT INTO categories (label, id_studio) VALUES (${label}, ${id_studio})`;
  return categories;
};

module.exports = {
  createVideo,
  updateVideo,
  findAllByStudio,
  findAllCategoriesByStudio,
  findVideo,
  deleteVideo,
  creatCategory,
};
