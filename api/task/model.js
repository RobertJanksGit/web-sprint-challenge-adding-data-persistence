const db = require("../../data/dbConfig");

async function get() {
  const rows = await db("tasks")
    .leftJoin("projects", "tasks.project_id", "projects.project_id")
    .select("tasks.*", "projects.project_description", "projects.project_name");
  rows.forEach((row) => {
    row.task_completed = Boolean(row.task_completed);
  });
  return rows;
}

async function getById(id) {
  const task = await db("tasks").where("tasks.task_id", id);
  return task[0];
}

async function add(newtask) {
  try {
    const [id] = await db("tasks").insert(newtask);
    const task = await getById(id);
    task.task_completed = Boolean(task.task_completed);
    return task;
  } catch (err) {
    console.error("error adding task", err);
    throw new Error("could not add task");
  }
}

module.exports = { get, getById, add };
