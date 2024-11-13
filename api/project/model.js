const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("projects");
  rows.forEach((row) => {
    row.project_completed = Boolean(row.project_completed);
  });
  return rows;
}

async function getById(id) {
  const project = await db("projects").where("projects.project_id", id);
  return project[0];
}

async function add(newProject) {
  try {
    const [id] = await db("projects").insert(newProject);
    const project = await getById(id);
    project.project_completed = Boolean(project.project_completed);
    return project;
  } catch (err) {
    console.error("error adding project", err);
    throw new Error("could not add project");
  }
}

module.exports = { get, getById, add };
