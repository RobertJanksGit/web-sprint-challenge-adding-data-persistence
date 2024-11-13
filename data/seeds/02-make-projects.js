/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Delete existing data to avoid duplicates
  await knex("projects").del();

  // Insert data into projects table
  await knex("projects").insert([
    {
      project_name: "Website Redesign",
      project_description: "A complete overhaul of the company website.",
      project_completed: false,
    },
    {
      project_name: "API Development",
      project_description: "Building a RESTful API for mobile app integration.",
      project_completed: false,
    },
    {
      project_name: "Mobile App",
      project_description: "Development of a mobile app for e-commerce.",
      project_completed: true,
    },
  ]);
};
