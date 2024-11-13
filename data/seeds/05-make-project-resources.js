/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Delete existing data to avoid duplicates
  await knex("project_resources").del();

  // Insert data into project_resources table
  await knex("project_resources").insert([
    {
      project_id: 1, // Website Redesign
      resource_id: 1, // React Framework
    },
    {
      project_id: 1, // Website Redesign
      resource_id: 2, // Node.js
    },
    {
      project_id: 2, // API Development
      resource_id: 2, // Node.js
    },
    {
      project_id: 2, // API Development
      resource_id: 3, // Express.js
    },
    {
      project_id: 3, // Mobile App
      resource_id: 2, // Node.js
    },
    {
      project_id: 3, // Mobile App
      resource_id: 4, // PostgreSQL
    },
  ]);
};
