const db = require("../../data/dbConfig");

async function get() {
  const row = await db("resources");
  return row;
}

async function getById(id) {
  const resource = await db("resources").where("resources.resource_id", id);
  return resource[0];
}

async function add(newResource) {
  try {
    const [id] = await db("resources").insert(newResource);
    const resource = await getById(id);
    return resource;
  } catch (err) {
    console.error("error adding resource", err);
    throw new Error("could not add resource");
  }
}

module.exports = { get, getById, add };
