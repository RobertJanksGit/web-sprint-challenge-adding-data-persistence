/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Delete existing data to avoid duplicates
  await knex("resources").del();

  // Insert data into resources table
  await knex("resources").insert([
    {
      resource_name: "React Framework",
      resource_description: "JavaScript library for building user interfaces.",
    },
    {
      resource_name: "Node.js",
      resource_description: "JavaScript runtime for server-side development.",
    },
    {
      resource_name: "Express.js",
      resource_description:
        "Web framework for Node.js to handle HTTP requests.",
    },
    {
      resource_name: "PostgreSQL",
      resource_description: "Relational database management system.",
    },
  ]);
};
