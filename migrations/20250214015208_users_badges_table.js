export function up(knex) {
  return knex.schema
    .createTable("badges", (table) => {
      table.increments("id").primary();
      table.string("badge_name").notNullable();
      table.integer("badge_duration").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("username").notNullable();
      table.string("email").notNullable();
      table
        .integer("badge_id")
        .unsigned()
        .references("badges.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
}

export function down(knex) {
  return knex.schema.dropTable("users").dropTable("badges");
}
