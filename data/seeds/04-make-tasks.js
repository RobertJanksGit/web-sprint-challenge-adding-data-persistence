/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Delete existing data to avoid duplicates
  await knex("tasks").del();

  // Insert data into tasks table
  await knex("tasks").insert([
    {
      task_description: "Design homepage layout",
      task_notes: "Focus on responsive design.",
      task_completed: false,
      project_id: 1, // Website Redesign
    },
    {
      task_description: "Set up database schema",
      task_notes: "Ensure normalized database structure.",
      task_completed: true,
      project_id: 2, // API Development
    },
    {
      task_description: "Test mobile app features",
      task_notes: "Ensure all features are working as expected.",
      task_completed: false,
      project_id: 3, // Mobile App
    },
  ]);
};
