const db = require("../services/Db");
const { schema } = require("./user.schema");
const bcrypt = require("bcrypt");

/*
 * Récupérer tous les studios
 **/

const findAll = async () => {
  const studio = await db.$queryRaw`SELECT * FROM studio`;
  return studio;
};

const findOne = async (studio) => {
  const newStudio =
    await db.$queryRaw`SELECT * FROM studio WHERE name = ${studio}`;
  return newStudio[0];
};

const findOneById = async (studio) => {
  const newStudio =
    await db.$queryRaw`SELECT * FROM studio WHERE id = ${studio}`;
  return newStudio[0];
};

/**
 *
 */
const createStudio = async (name, username) => {
  const studio = await db.studio.create({
    data: {
      name,
      username,
    },
  });
};

/**
 * create user Admin
 */
const createAdminUser = async (username, email, password, avatar) => {
  const { error } = schema.validate(
    { username, email, password, avatar },
    { abortEarly: false }
  );

  if (error) {
    throw error.details;
  }

  await db.$queryRaw`INSERT INTO users (username, email, password, role, avatar) VALUES (${username}, ${email}, ${await bcrypt.hash(
    password,
    12
  )}, 1, ${"https://www.t2transfer.com/wp-content/uploads/2021/10/83-836357_greg-ezeilo-avatar-icon-png.jpg"})`;
};

/**
 * Modifié les données d'un studio par son id
 */

const updateStudio = async (
  logo,
  name,
  background,
  background2,
  background_secondary,
  color_primary,
  color_secondary,
  typo,
  id
) => {
  await db.$queryRaw`UPDATE studio SET logo = ${logo}, name = ${name}, background = ${background}, background2 = ${background2}, background_secondary = ${background_secondary}, color_primary = ${color_primary}, color_secondary = ${color_secondary}, typo = ${typo} WHERE id = ${id}`;
};

/**
 * Modifié les données d'un studio par son id version totale
 */
const updateStudioAll = async (
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
) => {
  await db.$queryRaw`UPDATE studio SET logo= ${logo}, name = ${name}, banner = ${banner}, background = ${background}, background2 = ${background2}, background_secondary = ${background_secondary}, color_primary = ${color_primary}, color_secondary = ${color_secondary}, typo = ${typo}, main_title = ${main_title}, main_description = ${main_description}, title1 = ${title1}, description1 = ${description1}, url1 = ${url1}, title2 = ${title2}, description2 = ${description2}, url2 = ${url2}, title3 = ${title3}, description3 = ${description3}, url3 = ${url3},title4 = ${title4}, description4 = ${description4}, url4 = ${url4},title5 = ${title5}, description5 = ${description5}, url5 = ${url5} WHERE id = ${id}`;
};

const streamLaunch = async (id, is_on_stream, stream_url) => {
  await db.studio.update({
    data: {
      is_on_stream,
      stream_url,
    },
    where: { id: Number(id) },
  });
};

module.exports = {
  findAll,
  findOne,
  findOneById,
  updateStudio,
  updateStudioAll,
  streamLaunch,
  createStudio,
  createAdminUser,
};
