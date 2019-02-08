exports.seed = function(knex, Promise) {
  return knex('reminders').del()
    .then(function () {
      return knex('reminders').insert([
        {
          name: "Laundry",
          description: "Your laundry is getting moldy.",
          date: "Sat Feb 09 2019"   
      },
      {
          name: "Gym",
          description: "Hmmmmm, those pants are getting kinda tight.",
          date: "Sat Feb 09 2019"
      },
      {
          name: "School",
          description: "Can't always count on a sugar daddy. Turn off that damned Netflix and do some homework.",
          date: "Mon Feb 11 2019" 
      }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('reminders_id_seq', (SELECT MAX(id) FROM reminders))"
      )
    })
};
