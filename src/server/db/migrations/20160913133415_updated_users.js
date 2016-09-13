exports.up = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.string('email').notNullable().unique();
    table.string('github_token').notNullable().unique();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.withSchema('users', (table) => {
    table.dropColumn('email');
    table.dropColumn('github_token');
  });
};
