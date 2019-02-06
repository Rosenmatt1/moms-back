exports.up = function(knex, Promise) {
    return knex.schema.createTable('reminders', table => {
        table.increments()
        table.string('name').notNullable().defaultsTo('')
        table.string('description').notNullable().defaultsTo('')
        table.string('date').notNullable().defaultsTo('')
        table.string('time').notNullable().defaultsTo('')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable(reminders)
  };