const db = require("../services/Db");
const { schema, clearSchema } = require("./user.schema");
const bcrypt = require("bcrypt");

/**
 * Retourne tous les users
 */
const findAll = async () => {
  const user = await db.$queryRaw`SELECT * FROM users`;
  return user;
};

/**
 * Retourne tous les users
 */
const findOne = async (id) => {
  const user = await db.$queryRaw`SELECT * FROM users WHERE id = ${id}`;
  return user[0];
};

/**
 * Retourne un utilisateur par son username
 */
const findOneByUsername = async (username, clearPassword) => {
  const { error } = clearSchema.validate(
    { username, clearPassword },
    { abortEarly: false }
  );

  if (error) {
    throw error.details;
  }

  const user = await db.users.findUnique({
    where: { username: username },
    include: { admin: true },
  });
  if (
    user === null ||
    (await bcrypt.compare(clearPassword, user.password)) === false
  ) {
    return (user = "error 400");
  }
  return user;
};

/**
 * ajouter un utilisateur
 */

const createUser = async (username, email, password) => {
  const { error } = schema.validate(
    { username, email, password },
    { abortEarly: false }
  );

  if (error) {
    throw error.details;
  }

  await db.$queryRaw`INSERT INTO users (username, email, password, role) VALUES (${username}, ${email}, ${await bcrypt.hash(
    password,
    12
  )}, 2)`;
};

/**
 * Modifié les données d'un utilisateur par son id
 */
const updateUser = async (
  username,
  email,
  avatar,
  firstname,
  lastname,
  adresse,
  postal_code,
  city,
  country,
  phone,
  id
) => {
  await db.$queryRaw`UPDATE users SET username = ${username}, email = ${email}, avatar = ${avatar}, firstname = ${firstname}, lastname = ${lastname}, adresse = ${adresse}, postal_code = ${postal_code}, city = ${city}, country = ${country}, phone = ${phone} WHERE id = ${id}`;
};

/**
 * Suprime un utilisateur par son id
 */
const deleteUser = async (id) => {
  await db.$queryRaw`DELETE FROM users WHERE id = ${id}`;
};

module.exports = {
  findAll,
  findOne,
  findOneByUsername,
  createUser,
  updateUser,
  deleteUser,
};
